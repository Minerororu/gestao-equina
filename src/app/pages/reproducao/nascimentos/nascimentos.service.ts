import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PARTO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Parto } from 'src/app/models/ControleReproducao';

@Injectable({
  providedIn: 'root',
})
export class NascimentoService {
  nascimento: Parto;
  constructor(private db: DatabaseService, private router: Router) {}

  salvar<T>(nascimento: Parto, oldValue?: Parto) {
    return this.db
      .save<T>(PARTO_CL + '', nascimento, oldValue)
  }

  atualizar(id: string, valor: Parto) {
    return this.db.update(PARTO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(PARTO_CL + '', '');
  }

  remover(nascimento: Parto) {
    return this.db.delete(PARTO_CL + '', nascimento);
  }
}
