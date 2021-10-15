import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleColetaSemen } from 'src/app/models/ControleColetaSemen';
import { ControleColetaSemenService } from '../controle-coleta-semen.service';

@Component({
  selector: 'app-list-controle-coleta-semen',
  templateUrl: './list-controle-coleta-semen.component.html',
  styleUrls: ['./list-controle-coleta-semen.component.css']
})
export class ListControleColetaSemenComponent implements OnInit {
  controles: ControleColetaSemen[]
  constructor(private service: ControleColetaSemenService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.controles = doc as ControleColetaSemen[];
    })
  }

  editar(controle: ControleColetaSemen){
    this.service.controle = controle;
    this.router.navigate(['form-controle-coleta-semen']);
  }

  delete(controle: ControleColetaSemen){
    this.service.remover(controle);
    this.ngOnInit();
  }

  adicionar(){
    this.service.controle = new ControleColetaSemen();
    this.router.navigate(['form-controle-coleta-semen'])
  }
}
