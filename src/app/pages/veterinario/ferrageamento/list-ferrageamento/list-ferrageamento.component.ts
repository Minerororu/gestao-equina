import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hoje, strToDate } from 'src/app/helpers/function';
import { Ferrageamento } from 'src/app/models/Ferrageamento';
import { FerrageamentoService } from '../ferrageamento.service';

@Component({
  selector: 'app-list-ferrageamento',
  templateUrl: './list-ferrageamento.component.html',
  styleUrls: ['./list-ferrageamento.component.css'],
})
export class ListFerrageamentoComponent implements OnInit {
  ferrageamentos: Ferrageamento[];
  alerta: boolean;
  animalTemp;
  constructor(private service: FerrageamentoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().then((doc) => {
      this.ferrageamentos = doc as Ferrageamento[];
      this.ferrageamentos.map((ferrageamento) => {
        if (ferrageamento.periodo) {
          let dataferrageamento = strToDate(ferrageamento.data);
          let hojeDate = strToDate(hoje());
          dataferrageamento.setMonth(
            dataferrageamento.getMonth() + ferrageamento?.periodo
          );
          if (dataferrageamento <= hojeDate) {
            this.animalTemp = ferrageamento.animal.nome;
            this.alerta = true;
          } else if (this.animalTemp == ferrageamento.animal.nome) {
            this.alerta = false;
          }
        }
      });
      this.alerta
        ? alert(`O animal ${this.animalTemp}, precisa ser ferrageado`)
        : '';
    });
  }

  delete(ferrageamento: Ferrageamento) {
    this.service.remover(ferrageamento);
    this.ngOnInit();
  }

  edit(ferrageamento: Ferrageamento) {
    this.service.ferrageamento = ferrageamento;
    this.router.navigate(['form-ferrageamento']);
  }

  adicionar() {
    this.service.ferrageamento = new Ferrageamento();
    this.router.navigate(['form-ferrageamento']);
  }
}
