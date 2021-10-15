import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { VACINACAO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Vacinacao } from 'src/app/models/Vacinacao';

@Injectable({
  providedIn: 'root',
})
export class VacinacaoService {
  vacinacao: Vacinacao;
  bloquearEdicao: any;
  constructor(private db: DatabaseService) {}

  salvar<T>(vacinacao: Vacinacao, oldValue?: Vacinacao) {
    return this.db
      .save<T>(VACINACAO_CL + '', vacinacao, oldValue)
  }

  atualizar(id: string, valor: Vacinacao) {
    return this.db.update(VACINACAO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(VACINACAO_CL + '', 'data');
  }

  remover(vacinacao: Vacinacao) {
    return this.db.delete(VACINACAO_CL + '', vacinacao);
  }
}
