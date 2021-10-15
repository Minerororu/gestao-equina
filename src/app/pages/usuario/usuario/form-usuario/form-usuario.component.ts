import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/Usuario';
import { UsuarioService } from '../usuario.service';
import { TitleService } from '../../../title.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
})
export class FormUsuarioComponent implements OnInit {
  usuario: Usuario;
  permissoes = ['ADM', 'TÉCNICO', 'CLIENTE'];

  constructor(
    private service: UsuarioService,
    private titleService: TitleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.titleService.titulo = 'Formulário de Usuários';
    this.usuario = this.service.usuario ? this.service.usuario : new Usuario();
  }

  submit(a: any) {
    a.invalid
      ? alert('Informações importantes não foram informadas')
      : this.service.salvar(this.usuario).finally(() => this.router.navigate(['list-usuario']));
  }
}
