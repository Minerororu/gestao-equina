import { Injectable } from '@angular/core';
import { RESPONSAVEL_CL} from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Responsavel } from 'src/app/models/Responsavel';

@Injectable({
  providedIn: 'root',
})
export class ResponsavelService {
  responsavel: Responsavel;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(responsavel: Responsavel, oldValue?: Responsavel) {
    return this.db.save<T>(RESPONSAVEL_CL + '', responsavel, oldValue);
  }

  atualizar(id: string, valor: Responsavel) {
    return this.db.update(RESPONSAVEL_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(RESPONSAVEL_CL + '', '');
  }

  remover(responsavel: Responsavel) {
    return this.db.delete(RESPONSAVEL_CL + '', responsavel);
  }
}