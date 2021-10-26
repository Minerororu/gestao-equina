import { Injectable } from '@angular/core';
import { DOENCA_CL} from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Doenca } from 'src/app/models/Doenca';

@Injectable({
  providedIn: 'root',
})
export class DoencaService {
  doenca: Doenca;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(doenca: Doenca, oldValue?: Doenca) {
    return this.db.save<T>(DOENCA_CL + '', doenca, oldValue);
  }

  atualizar(id: string, valor: Doenca) {
    return this.db.update(DOENCA_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(DOENCA_CL + '', '');
  }

  remover(doenca: Doenca) {
    return this.db.delete(DOENCA_CL + '', doenca);
  }
}