import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEntrada } from 'src/app/models/ControleEntrada';
import { ControleSaida } from 'src/app/models/ControleSaida';
import { ControleMovimentoService } from '../controle-saida.service';

@Component({
  selector: 'app-list-controle-movimento',
  templateUrl: './list-controle-movimento.component.html',
  styleUrls: ['./list-controle-movimento.component.css']
})
export class ListControleMovimentoComponent implements OnInit {
  controlesSaida: ControleSaida[]
  movimento: string;
  controleEntrada: ControleEntrada[];
  constructor(private service: ControleMovimentoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listarSaida().then(doc => {
      this.controlesSaida = doc as ControleSaida[]
    })

    this.service.listarEntrada().then(doc => {
      this.controleEntrada = doc as ControleEntrada[]
    })
  }


  delete(controle: ControleSaida){
    this.service.remover(controle);
    this.ngOnInit()
  }

  edit(controle: ControleSaida){
    this.service.controle = controle;
    this.router.navigate(['form-controle-saida'])
  }

  adicionar(){
    this.service.controle = new ControleSaida()
    this.router.navigate(['form-controle-saida']);
  }

  filtrar(dado: string){
    this.movimento = dado
  }
}
