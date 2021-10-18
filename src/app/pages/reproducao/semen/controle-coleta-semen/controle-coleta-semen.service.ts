import { Injectable } from '@angular/core';
import { CONTROLE_COLETA_SEMEN } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { ControleColetaSemen } from 'src/app/models/ControleColetaSemen';

@Injectable({
  providedIn: 'root',
})
export class ControleColetaSemenService {
  controle: ControleColetaSemen;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(controle: ControleColetaSemen, oldValue?: ControleColetaSemen) {
    return this.db.save<T>(CONTROLE_COLETA_SEMEN + '', controle, oldValue);
  }

  atualizar(id: string, valor: ControleColetaSemen) {
    return this.db.update(CONTROLE_COLETA_SEMEN + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(CONTROLE_COLETA_SEMEN + '', '');
  }

  remover(controle: ControleColetaSemen) {
    return this.db.delete(CONTROLE_COLETA_SEMEN + '', controle);
  }
}
