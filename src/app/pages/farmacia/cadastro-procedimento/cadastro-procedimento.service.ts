import { Injectable } from '@angular/core';
import { CADASTRO_PROCEDIMENTO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { CadastroProcedimento } from 'src/app/models/CadastroProcedimento';

@Injectable({
  providedIn: 'root',
})
export class CadastroProcedimentoService {
  procedimento: CadastroProcedimento;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(
    procedimento: CadastroProcedimento,
    oldValue?: CadastroProcedimento
  ) {
    return this.db.save<T>(
      CADASTRO_PROCEDIMENTO_CL + '',
      procedimento,
      oldValue
    );
  }

  atualizar(id: string, valor: CadastroProcedimento) {
    return this.db.update(CADASTRO_PROCEDIMENTO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(CADASTRO_PROCEDIMENTO_CL + '', '');
  }

  remover(procedimento: CadastroProcedimento) {
    return this.db.delete(CADASTRO_PROCEDIMENTO_CL + '', procedimento);
  }
}
