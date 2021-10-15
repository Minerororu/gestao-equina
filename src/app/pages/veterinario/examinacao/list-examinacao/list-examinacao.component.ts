import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Examinacao } from 'src/app/models/Examinacao';
import { ExaminacaoService } from '../examinacao.service';

@Component({
  selector: 'app-list-examinacao',
  templateUrl: './list-examinacao.component.html',
  styleUrls: ['./list-examinacao.component.css']
})
export class ListExaminacaoComponent implements OnInit {
  examinacoes: Examinacao[]
  constructor(private service: ExaminacaoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.examinacoes = doc as Examinacao[];
    })
  }

  edit(examinacao : Examinacao){
    this.service.examinacao = examinacao;
    this.service.bloquearEdicao = examinacao.bloquearEdicao;
    this.router.navigate(['form-examinacao']);
  }

  delete(examinacao: Examinacao){
    this.service.remover(examinacao);
    this.ngOnInit();
  }

  adicionar(){
    this.service.examinacao = new Examinacao();
    this.router.navigate(['form-examinacao']);
  }
}
