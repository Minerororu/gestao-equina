import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dateToStr, hoje, strToDate } from 'src/app/helpers/function';
import { Vermifugacao } from 'src/app/models/Vermifugacao';
import { VermifugacaoService } from '../vermifugacao.service';

@Component({
  selector: 'app-list-vermifugacao',
  templateUrl: './list-vermifugacao.component.html',
  styleUrls: ['./list-vermifugacao.component.css'],
})
export class ListVermifugacaoComponent implements OnInit {
  vermifugacoes: Vermifugacao[];
  animalTemp: string;
  vermifugoTemp: string;
  alerta: boolean;
  constructor(private service: VermifugacaoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().then((doc) => {
      let hojeDate = strToDate(hoje());
      this.vermifugacoes = doc as Vermifugacao[];
      let diasAteVermifugacao = 0
      this.vermifugacoes.map((vermifugacao) => {
        if (vermifugacao.vermifugo.periodo) {
          //criando data
          let dataVermifugacao = strToDate(vermifugacao.data);
          let dataAntedecida = strToDate(dateToStr(hojeDate));
          console.log(hojeDate)
          dataAntedecida.setDate(hojeDate.getDate() - 2)
          console.log(hojeDate)
          diasAteVermifugacao = hojeDate.getDate() - dataVermifugacao.getDate()
          dataVermifugacao.setDate(
            dataVermifugacao.getDate() + vermifugacao?.vermifugo?.periodo
          );
          //comparando a data
          console.log(dataVermifugacao)
          if (dataVermifugacao <= dataVermifugacao) {
            this.animalTemp = vermifugacao.animal.nome;
            this.alerta = true;
            this.vermifugoTemp = vermifugacao.vermifugo.vermifugo;
          } else if (
            this.animalTemp == vermifugacao.animal.nome &&
            this.vermifugoTemp == vermifugacao.vermifugo.vermifugo
          ) {
            this.alerta = false;
          }
        }
      });
      this.alerta
        ? alert(
            `O animal ${this.animalTemp}, precisa tomar o vermifugo: '${this.vermifugoTemp}', em ${diasAteVermifugacao} dia(s)`
          )
        : '';
    });
  }

  edit(vermifugacao: Vermifugacao) {
    this.service.vermifugacao = vermifugacao;
    this.service.bloquearEdicao = vermifugacao.bloquearEdicao;
    this.router.navigate(['form-vermifugacao']);
  }

  delete(Vermifugacao: Vermifugacao) {
    this.service.remover(Vermifugacao);
    this.ngOnInit();
  }

  adicionar() {
    this.service.vermifugacao = new Vermifugacao();
    this.router.navigate(['form-vermifugacao']);
  }
}
