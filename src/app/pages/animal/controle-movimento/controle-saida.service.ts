import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  CONTROLE_ENTRADA_CL,
  CONTROLE_SAIDA_CL,
} from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { ControleEntrada } from 'src/app/models/ControleEntrada';
import { ControleSaida } from 'src/app/models/ControleSaida';

@Injectable({
  providedIn: 'root',
})
export class ControleMovimentoService {
  controle: ControleSaida;
  constructor(private db: DatabaseService, private router: Router) {}

  salvar<T>(controle: ControleSaida, oldValue?: ControleSaida) {
    return this.db
      .save<T>(CONTROLE_SAIDA_CL + '', controle, oldValue)
      .finally(() => this.router.navigate(['list-controle-movimento']));
  }

  salvarEntrada<T>(controle: ControleEntrada, oldValue?: ControleEntrada) {
    return this.db.save<T>(CONTROLE_ENTRADA_CL + '', controle, oldValue);
  }

  atualizar(id: string, valor: ControleSaida) {
    return this.db.update(CONTROLE_SAIDA_CL + '', id + '', { ...valor });
  }

  listarSaida<T>() {
    return this.db.list<T>(CONTROLE_SAIDA_CL + '', '');
  }

  listarEntrada<T>() {
    return this.db.list<T>(CONTROLE_ENTRADA_CL + '', '');
  }

  remover(controle: ControleSaida) {
    return this.db.delete(CONTROLE_SAIDA_CL + '', controle);
  }
}
