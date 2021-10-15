import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CONTROLE_REPRODUCAO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { ControleReproducao } from 'src/app/models/ControleReproducao';

@Injectable({
  providedIn: 'root',
})
export class ControleReproducaoService {
  controle: ControleReproducao;
  constructor(private db: DatabaseService, private router: Router) {}

  salvar<T>(controle: ControleReproducao, oldValue?: ControleReproducao) {
    return this.db
      .save<T>(CONTROLE_REPRODUCAO_CL + '', controle, oldValue)
  }

  atualizar(id: string, valor: ControleReproducao) {
    return this.db.update(CONTROLE_REPRODUCAO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(CONTROLE_REPRODUCAO_CL + '', '');
  }

  remover(controle: ControleReproducao) {
    return this.db.delete(CONTROLE_REPRODUCAO_CL + '', controle);
  }
}
