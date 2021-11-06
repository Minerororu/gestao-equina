import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentReference,
  QueryFn,
} from '@angular/fire/firestore';
import {
  CollectionReference,
  DocumentData,
  Query,
  WriteBatch,
} from '@firebase/firestore-types';
import { map } from 'rxjs/operators';
import firebase from 'firebase';
import WhereFilterOp = firebase.firestore.WhereFilterOp;
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  private debug = true;
  private promises = [];

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore
  ) {}
  uid: string = JSON.parse(localStorage.getItem('user')).uid;

  public getList<T>(collection: string, filtros?: QueryFn) {
    const ref = this.afs.firestore.collection(collection + '');

    return (filtros ? filtros(ref) : ref).get().then((querySnapshot) => {
      const data: T[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...(doc.data() as T), id: doc.id } as T);
      });
      if (this.debug) {
        console.log('list - fromCache: ', querySnapshot.metadata.fromCache);
      }
      return data;
    });
  }

  public getCollection<T>(collection: string, filtros?: QueryFn) {
    return this.afs
      .collection<T>(collection, filtros)
      .snapshotChanges()
      .pipe(
        map((value) =>
          value.map(
            (snap) =>
              ({ ...snap.payload.doc.data(), id: snap.payload.doc.id } as T)
          )
        )
      );
  }

  public getDoc<T>(collection: string, id: string) {
    return this.afs
      .collection(collection)
      .doc<T>(id)
      .snapshotChanges()
      .pipe(
        map((snap) => {
          if (snap.payload.exists) {
            return { ...snap.payload.data(), id: snap.payload.id } as T;
          } else {
            return null;
          }
        })
      );
  }

  public async save<T>(
    collection: string,
    newValue: any,
    oldValue?: any
  ): Promise<T> {
    newValue.key;
    const docRef: DocumentReference = await this.getDocument(
      collection,
      newValue.key || newValue.id || null
    );

    const saveValue = JSON.parse(JSON.stringify(newValue));
    saveValue.uid = this.uid;

    return this.setItem<T>(docRef, saveValue, collection).finally();
  }

  public getDocument(collection: string, id?: string) {
    return id
      ? this.afs.firestore.collection(collection + '').doc(id)
      : this.afs.firestore.collection(collection + '').doc();
  }

  public async writeBatch<T>(
    writeFunction: (batch: WriteBatch) => WriteBatch | Promise<WriteBatch>
  ): Promise<boolean> {
    return true;
  }

  public async update<T>(
    collection: string,
    id: string,
    value: any
  ): Promise<T> {
    return { ...value, id };
  }

  public async delete(collection: string, item: any) {
    return this.remove(collection, item).finally();
  }

  async list<T>(
    collection: string,
    orderBy?:
      | string
      | Array<string>
      | { key: string; direction: 'asc' | 'desc' },
    where?: Array<{ key: string; op: WhereFilterOp; value: any }>,
    qtde?: number
  ): Promise<T[]> {
    const ref = this.afs.firestore.collection(collection + '');

    if (!where) {
      where = [];
      where[0] = { key: 'uid', op: 'in', value: [this.uid, 'generico'] };
    } else {
      where.push({ key: 'uid', op: '==', value: this.uid });
    }

    return this.queries(ref, where, orderBy, qtde)
      .get()
      .then((querySnapshot) => {
        const data: any[] = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        if (this.debug) {
          console.log('list - fromCache: ', querySnapshot.metadata.fromCache);
        }

        return data;
      });
  }

  private queries(
    values:
      | firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
      | Query<DocumentData>,
    where: any[] | undefined,
    orderBy:
      | string
      | any[]
      | { key: string; direction: firebase.firestore.OrderByDirection }
      | undefined,
    limit: number | undefined
  ) {
    let query: CollectionReference | Query = values;
    /* WHERE*/
    if (where) {
      where.forEach((w) => {
        if (w.value) {
          query = query.where(w.key + '', w.op, w.value);
        }
      });
    }

    if (orderBy) {
      if (orderBy instanceof Array) {
        orderBy.forEach((ord) => {
          if (ord && ord !== '') {
            if (ord.key) {
              query = query.orderBy(ord.key + '', ord.direction);
            } else {
              query = query.orderBy(ord + '', 'asc');
            }
          }
        });
      } else {
        if (orderBy['key']) {
          query = query.orderBy(orderBy['key'] + '', orderBy['direction']);
        } else {
          query = query.orderBy(orderBy + '', 'asc');
        }
      }
    }

    if (limit) {
      query = query.limit(limit);
    }

    return query;
  }

  async getItem<T>(collection: string, key: string): Promise<T> {
    const ref = this.afs.firestore.collection(collection).doc(key);

    return ref.get().then((doc) => {
      if (doc.exists) {
        if (this.debug) {
          console.log('get - fromCache: ', doc.metadata.fromCache);
        }
        return { ...doc.data(), key } as any;
      } else {
        console.error('No such document in ' + collection + '/' + key);
        return null;
      }
    });
  }

  private async setItem<T>(
    docRef: firebase.firestore.DocumentReference,
    saveValue: any,
    collection: string
  ) {
    if (!navigator.onLine) {
      // Quando está offline
      this.promises.push(docRef.set(saveValue) as never);
      if (this.debug) {
        console.log(
          'Document ' +
            collection +
            '/' +
            docRef.id +
            ' written successfully in offline'
        );
      }
      return { ...saveValue, id: docRef.id };
    } else {
      // Quando está online
      saveValue.id = docRef.id;
      return docRef
        .set(saveValue)
        .then(() => {
          if (this.debug) {
            console.log(
              'Document ' +
                collection +
                '/' +
                docRef.id +
                ' written successfully'
            );
          }
          return { ...saveValue, id: docRef.id };
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
          throw new Error('Error writing document: ' + error.code);
        });
    }
  }

  private async remove(collection: string, item: any): Promise<boolean> {
    if (!navigator.onLine) {
      throw new Error('Offline');
    }

    const id = item.key || item.id;

    if (!id) {
      throw new Error('Id não encontrado no item');
    }

    return this.afs
      .collection(collection)
      .doc(id)
      .delete()
      .then(() => {
        if (this.debug) {
          console.log('Item removido: ' + collection + '/' + id);
        }
        return true;
      });
  }
}
