import { Injectable } from '@angular/core';
import { EXAMINACAO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Examinacao } from 'src/app/models/Examinacao';

@Injectable({
  providedIn: 'root',
})
export class ExaminacaoService {
  examinacao: Examinacao;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(examinacao: Examinacao, oldValue?: Examinacao) {
    return this.db
      .save<T>(EXAMINACAO_CL + '', examinacao, oldValue)
  }

  atualizar(id: string, valor: Examinacao) {
    return this.db.update(EXAMINACAO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(EXAMINACAO_CL + '', '');
  }

  remover(examinacao: Examinacao) {
    return this.db.delete(EXAMINACAO_CL + '', examinacao);
  }
}
