import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleFolicular } from 'src/app/models/ControleFolicular';
import { ControleFolicularService } from '../controle-folicular.service';

@Component({
  selector: 'app-list-controle-folicular',
  templateUrl: './list-controle-folicular.component.html',
  styleUrls: ['./list-controle-folicular.component.css'],
})
export class ListControleFolicularComponent implements OnInit {
  controles: ControleFolicular[];
  constructor(
    private service: ControleFolicularService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.listar().then((doc) => {
      this.controles = doc as ControleFolicular[];
    });
  }

  edit(controle: ControleFolicular) {
    this.service.controle = controle;
    this.service.bloquearEdicao = controle.bloquearEdicao;
    this.router.navigate(['form-controle-folicular']);
  }

  delete(controle: ControleFolicular) {
    this.service.remover(controle);
    this.ngOnInit();
  }

  adicionar() {
    this.service.controle = new ControleFolicular();
    this.router.navigate(['form-controle-folicular']);
  }
}
