import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FERRAGEAMENTO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Ferrageamento } from 'src/app/models/Ferrageamento';

@Injectable({
  providedIn: 'root',
})
export class FerrageamentoService {
  ferrageamento: Ferrageamento;
  constructor(private db: DatabaseService, private router: Router) {}

  salvar<T>(ferrageamento: Ferrageamento, oldValue?: Ferrageamento) {
    return this.db
      .save<T>(FERRAGEAMENTO_CL + '', ferrageamento, oldValue)
  }

  atualizar(id: string, valor: Ferrageamento) {
    return this.db.update(FERRAGEAMENTO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(FERRAGEAMENTO_CL + '', 'data');
  }

  remover(ferrageamento: Ferrageamento) {
    return this.db.delete(FERRAGEAMENTO_CL + '', ferrageamento);
  }
}
