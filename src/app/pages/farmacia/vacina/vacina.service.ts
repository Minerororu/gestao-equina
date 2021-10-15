import { Injectable } from '@angular/core';
import { VACINA_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Vacina } from 'src/app/models/Vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {
  vacina: Vacina;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(vacina: Vacina, oldValue?: Vacina) {
    return this.db
      .save<T>(VACINA_CL + '', vacina, oldValue)
  }

  atualizar(id: string, valor: Vacina) {
    return this.db.update(VACINA_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(VACINA_CL + '', '');
  }

  remover(vacina: Vacina) {
    return this.db.delete(VACINA_CL + '', vacina);
  }
}
