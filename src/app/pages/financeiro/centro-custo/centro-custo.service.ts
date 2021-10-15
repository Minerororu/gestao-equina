import { Injectable } from '@angular/core';
import { CENTRO_CUSTO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { CentroCusto } from 'src/app/models/CentroCusto';

@Injectable({
  providedIn: 'root'
})
export class CentroCustoService {
  centroCusto: CentroCusto;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(centroCusto: CentroCusto, oldValue?: CentroCusto) {
    return this.db
      .save<T>(CENTRO_CUSTO_CL + '', centroCusto, oldValue)
  }

  atualizar(id: string, valor: CentroCusto) {
    return this.db.update(CENTRO_CUSTO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(CENTRO_CUSTO_CL + '', '');
  }

  remover(centroCusto: CentroCusto) {
    return this.db.delete(CENTRO_CUSTO_CL + '', centroCusto);
  }
}
