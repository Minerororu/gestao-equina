import { Injectable } from '@angular/core';
import { USO_PROCEDIMENTO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { UsoProcedimento } from 'src/app/models/UsoProcedimento';

@Injectable({
  providedIn: 'root'
})
export class UsoProcedimentoService {
  procedimento: UsoProcedimento;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(procedimento: UsoProcedimento, oldValue?: UsoProcedimento) {
    return this.db
      .save<T>(USO_PROCEDIMENTO_CL + '', procedimento, oldValue)
  }

  atualizar(id: string, valor: UsoProcedimento) {
    return this.db.update(USO_PROCEDIMENTO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(USO_PROCEDIMENTO_CL + '', '');
  }

  remover(procedimento: UsoProcedimento) {
    return this.db.delete(USO_PROCEDIMENTO_CL + '', procedimento);
  }
}
