import { Injectable } from '@angular/core';
import { CONTA_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { ContaFinanceira } from 'src/app/models/ContaFinanceira';

@Injectable({
  providedIn: 'root'
})
export class ContaFinanceiraService {
  contaFinanceira: ContaFinanceira;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(contaFinanceira: ContaFinanceira, oldValue?: ContaFinanceira) {
    return this.db
      .save<T>(CONTA_CL + '', contaFinanceira, oldValue)
  }

  atualizar(id: string, valor: ContaFinanceira) {
    return this.db.update(CONTA_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(CONTA_CL + '', '');
  }

  remover(contaFinanceira: ContaFinanceira) {
    return this.db.delete(CONTA_CL + '', contaFinanceira);
  }
}
