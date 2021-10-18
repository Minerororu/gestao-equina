import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../../../../models/Usuario';
import { Router } from '@angular/router';
import { TitleService } from '../../../title.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css'],
})
export class ListUsuarioComponent implements OnInit {
  usuarios: Usuario[];

  constructor(
    private service: UsuarioService,
    private router: Router,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.titulo = 'Lista de Usuarios';
    this.service.usuario = new Usuario();

    this.service.listar().then((doc) => {
      this.usuarios = doc as Usuario[];
    });
  }

  editUsuario(usuario: Usuario) {
    this.service.usuario = usuario;
    this.router.navigate(['form-usuario']);
  }

  deleteUsuario(usuario: Usuario) {
    this.service.remover(usuario).finally(() => this.ngOnInit());
  }

  adicionar() {
    this.router.navigate(['register-user']);
  }
}
