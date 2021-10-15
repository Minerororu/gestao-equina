import { Injectable } from '@angular/core';
import { USUARIOS_CL } from '../../../components/constants/constants';
import { DatabaseService } from '../../../services/database.service';
import { Usuario } from '../../../models/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuario: Usuario;
  constructor(private db: DatabaseService, private router: Router) {}

  salvar<T>(usuario: Usuario, oldValue?: Usuario) {
    return this.db.save<T>(USUARIOS_CL + '', usuario, oldValue);
  }

  atualizar(id: string, valor: Usuario) {
    return this.db.update(USUARIOS_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(USUARIOS_CL + '', '');
  }

  remover(usuario: Usuario) {
    return this.db.delete(USUARIOS_CL + '', usuario);
  }
}
