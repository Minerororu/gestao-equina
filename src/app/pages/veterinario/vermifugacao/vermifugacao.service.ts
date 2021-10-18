import { Injectable } from '@angular/core';
import { VERMIFUGACAO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Vermifugacao } from 'src/app/models/Vermifugacao';

@Injectable({
  providedIn: 'root',
})
export class VermifugacaoService {
  vermifugacao: Vermifugacao;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(vermifugacao: Vermifugacao, oldValue?: Vermifugacao) {
    return this.db.save<T>(VERMIFUGACAO_CL + '', vermifugacao, oldValue);
  }

  atualizar(id: string, valor: Vermifugacao) {
    return this.db.update(VERMIFUGACAO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(VERMIFUGACAO_CL + '', '');
  }

  remover(vermifugacao: Vermifugacao) {
    return this.db.delete(VERMIFUGACAO_CL + '', vermifugacao);
  }
}
