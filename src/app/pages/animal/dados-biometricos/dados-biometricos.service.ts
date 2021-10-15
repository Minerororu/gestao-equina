import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DADOS_BIOMETRICOS_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { DadosBiometricos } from 'src/app/models/DadosBiometricos';
import firebase from 'firebase';
import WhereFilterOp = firebase.firestore.WhereFilterOp;

@Injectable({
  providedIn: 'root',
})
export class DadosBiometricosService {
  dado: DadosBiometricos;
  constructor(private db: DatabaseService, private router: Router) {}

  salvar<T>(dado: DadosBiometricos, oldValue?: DadosBiometricos) {
    return this.db
      .save<T>(DADOS_BIOMETRICOS_CL + '', dado, oldValue)
      .finally(() => this.router.navigate(['list-dados-biometricos']));
  }

  atualizar(id: string, valor: DadosBiometricos) {
    return this.db.update(DADOS_BIOMETRICOS_CL + '', id + '', { ...valor });
  }

  listar<T>(where?: Array<{op: WhereFilterOp; value: any; key: string; }>,
    orderBy?: string
    | Array<string>
    | { key: string; direction: 'asc' | 'desc' },) {
    return this.db.list<T>(DADOS_BIOMETRICOS_CL + '', orderBy, where);
  }

  remover(dado: DadosBiometricos) {
    return this.db.delete(DADOS_BIOMETRICOS_CL + '', dado);
  }
}
