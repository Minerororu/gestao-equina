import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vermifugacao } from 'src/app/models/Vermifugacao';
import { VermifugacaoService } from '../vermifugacao.service';

@Component({
  selector: 'app-list-vermifugacao',
  templateUrl: './list-vermifugacao.component.html',
  styleUrls: ['./list-vermifugacao.component.css']
})
export class ListVermifugacaoComponent implements OnInit {
  vermifugacoes: Vermifugacao[]
  constructor(private service: VermifugacaoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.vermifugacoes = doc as Vermifugacao[];
    })
  }

  edit(vermifugacao : Vermifugacao){
    this.service.vermifugacao = vermifugacao;
    this.service.bloquearEdicao = vermifugacao.bloquearEdicao;
    this.router.navigate(['form-vermifugacao']);
  }

  delete(Vermifugacao: Vermifugacao){
    this.service.remover(Vermifugacao);
    this.ngOnInit();
  }

  adicionar(){
    this.service.vermifugacao = new Vermifugacao();
    this.router.navigate(['form-vermifugacao']);
  }
}
