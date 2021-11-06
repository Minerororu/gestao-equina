import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dateToStr, hoje, strToDate } from 'src/app/helpers/function';
import { Vacinacao } from 'src/app/models/Vacinacao';
import { VacinacaoService } from '../vacinacao.service';

@Component({
  selector: 'app-list-vacinacao',
  templateUrl: './list-vacinacao.component.html',
  styleUrls: ['./list-vacinacao.component.css'],
})
export class ListVacinacaoComponent implements OnInit {
  vacinacoes: Vacinacao[];
  animalTemp: any;
  alerta: boolean;
  vacinaTemp: any;
  constructor(private service: VacinacaoService, private router: Router) {}

  ngOnInit(): void {
    let diasAteVacinacao = 0
    let hojeDate = strToDate(hoje())
    this.service.listar().then((doc) => {
      this.vacinacoes = doc as Vacinacao[];
      this.vacinacoes.map((vacinacao) => {
        if (vacinacao.vacina.periodo) {
          //criando data
          let dataVacinacao = strToDate(vacinacao.data);
          let dataAntedecida = strToDate(dateToStr(hojeDate));
          console.log(hojeDate)
          dataAntedecida.setDate(hojeDate.getDate() - 2)
          console.log(hojeDate)
          diasAteVacinacao = hojeDate.getDate() - dataVacinacao.getDate()
          dataVacinacao.setDate(
            dataVacinacao.getDate() + vacinacao?.vacina?.periodo
          );
          //comparando a data
          console.log(dataVacinacao)
          if (dataVacinacao <= dataVacinacao) {
            this.animalTemp = vacinacao.animal.nome;
            this.alerta = true;
            this.vacinaTemp = vacinacao.vacina.vacina;
          } else if (
            this.animalTemp == vacinacao.animal.nome &&
            this.vacinaTemp == vacinacao.vacina.vacina
          ) {
              this.alerta = false;
          }
        }
      });
      this.alerta
        ? alert(
            `O animal ${this.animalTemp}, precisa tomar a vacina: '${this.vacinaTemp}', em ${diasAteVacinacao} dia(s)`
          )
        : '';
    });
  }

  edit(vacinacao: Vacinacao) {
    this.service.vacinacao = vacinacao;
    this.service.bloquearEdicao = vacinacao.bloquearEdicao;
    this.router.navigate(['form-vacinacao']);
  }

  delete(vacinacao: Vacinacao) {
    this.service.remover(vacinacao);
    this.ngOnInit();
  }

  adicionar() {
    this.service.vacinacao = new Vacinacao();
    this.router.navigate(['form-vacinacao']);
  }
}
