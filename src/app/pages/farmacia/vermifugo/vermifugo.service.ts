import { Injectable } from '@angular/core';
import { VERMIFUGO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Vermifugo } from 'src/app/models/Vermifugo';

@Injectable({
  providedIn: 'root'
})
export class VermifugoService {
  vermifugo: Vermifugo;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService) {}

  salvar<T>(vermifugo: Vermifugo, oldValue?: Vermifugo) {
    return this.db
      .save<T>(VERMIFUGO_CL + '', vermifugo, oldValue)
  }

  atualizar(id: string, valor: Vermifugo) {
    return this.db.update(VERMIFUGO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(VERMIFUGO_CL + '', '');
  }

  remover(vermifugo: Vermifugo) {
    return this.db.delete(VERMIFUGO_CL + '', vermifugo);
  }
}
