import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { REGISTRO_CLINICO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { RegistroClinico } from 'src/app/models/RegistroClinico';

@Injectable({
  providedIn: 'root',
})
export class RegistroClinicoService {
  registroClinico: RegistroClinico;
  constructor(private db: DatabaseService, private router: Router) {}

  salvar<T>(registroClinico: RegistroClinico, oldValue?: RegistroClinico) {
    return this.db.save<T>(REGISTRO_CLINICO_CL + '', registroClinico, oldValue);
  }

  atualizar(id: string, valor: RegistroClinico) {
    return this.db.update(REGISTRO_CLINICO_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(REGISTRO_CLINICO_CL + '', '');
  }

  remover(registroClinico: RegistroClinico) {
    return this.db.delete(REGISTRO_CLINICO_CL + '', registroClinico);
  }
}
