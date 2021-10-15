import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosBiometricos } from 'src/app/models/DadosBiometricos';
import { DadosBiometricosService } from '../dados-biometricos.service';

@Component({
  selector: 'app-list-dados-biometricos',
  templateUrl: './list-dados-biometricos.component.html',
  styleUrls: ['./list-dados-biometricos.component.css']
})
export class ListDadosBiometricosComponent implements OnInit {
  dados: DadosBiometricos[]
  constructor(private service: DadosBiometricosService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.dados = doc as DadosBiometricos[]
    })
  }


  delete(dado: DadosBiometricos){
    this.service.remover(dado);
    this.ngOnInit()
  }

  edit(dado: DadosBiometricos){
    this.service.dado = dado;
    this.router.navigate(['form-dados-biometricos'])
  }

  adicionar(){
    this.service.dado = new DadosBiometricos()
    this.router.navigate(['form-dados-biometricos']);
  }

  resumo(dado : DadosBiometricos){
    this.service.dado = dado
    this.router.navigate(['resumo-dados-biometricos']);
  }
}
