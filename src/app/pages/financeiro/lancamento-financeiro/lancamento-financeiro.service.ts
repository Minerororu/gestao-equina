import { Injectable } from '@angular/core';
import { LANCAMENTO_FINANCEIRO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Lancamento } from 'src/app/models/Lancamento';

@Injectable({
  providedIn: 'root'
})
export class LancamentoFinanceiroService {
  lancamento: Lancamento;
  bloquearEdicao: boolean;
  editing: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(lancamento: Lancamento, oldValue?: Lancamento) {
    return this.db
      .save<T>(LANCAMENTO_FINANCEIRO_CL + '', lancamento, oldValue)
  }

  atualizar(id: string, valor: Lancamento) {
    return this.db.update(LANCAMENTO_FINANCEIRO_CL + '', id + '', { ...valor });
  }

  listar<T>(where?: {key: string, op: any, value: any}[]) {
    return this.db.list<T>(LANCAMENTO_FINANCEIRO_CL + '', '', where);
  }

  remover(lancamento: Lancamento) {
    return this.db.delete(LANCAMENTO_FINANCEIRO_CL + '', lancamento);
  }
}
