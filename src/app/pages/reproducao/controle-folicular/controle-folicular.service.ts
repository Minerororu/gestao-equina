import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CONTROLE_FOLICULAR_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { ControleFolicular } from 'src/app/models/ControleFolicular';

@Injectable({
  providedIn: 'root',
})
export class ControleFolicularService {
  controle: ControleFolicular;
  bloquearEdicao: boolean;
  constructor(private db: DatabaseService, private router: Router) {}

  salvar<T>(controle: ControleFolicular, oldValue?: ControleFolicular) {
    return this.db.save<T>(CONTROLE_FOLICULAR_CL + '', controle, oldValue);
  }

  atualizar(id: string, valor: ControleFolicular) {
    return this.db.update(CONTROLE_FOLICULAR_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(CONTROLE_FOLICULAR_CL + '', '');
  }

  remover(controle: ControleFolicular) {
    return this.db.delete(CONTROLE_FOLICULAR_CL + '', controle);
  }
}
