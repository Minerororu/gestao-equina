import { Injectable } from '@angular/core';
import { DEMONSTRATIVO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Demonstrativo } from 'src/app/models/Demonstrativo';

@Injectable({
  providedIn: 'root'
})
export class DemonstrativoService {
  demonstrativo: Demonstrativo;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(demonstrativo: Demonstrativo, oldValue?: Demonstrativo) {
    return this.db
      .save<T>(DEMONSTRATIVO_CL + '', demonstrativo, oldValue)
  }

  atualizar(id: string, valor: Demonstrativo) {
    return this.db.update(DEMONSTRATIVO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(DEMONSTRATIVO_CL + '', '');
  }

  remover(demonstrativo: Demonstrativo) {
    return this.db.delete(DEMONSTRATIVO_CL + '', demonstrativo);
  }
}
