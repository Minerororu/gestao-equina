import { Injectable } from '@angular/core';
import { EXAME_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Exame } from 'src/app/models/Exame';

@Injectable({
  providedIn: 'root',
})
export class ExameService {
  exame: Exame;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(exame: Exame, oldValue?: Exame) {
    return this.db.save<T>(EXAME_CL + '', exame, oldValue);
  }

  atualizar(id: string, valor: Exame) {
    return this.db.update(EXAME_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(EXAME_CL + '', '');
  }

  remover(exame: Exame) {
    return this.db.delete(EXAME_CL + '', exame);
  }
}
