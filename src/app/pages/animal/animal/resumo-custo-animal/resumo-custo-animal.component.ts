import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ColorAxis } from 'highcharts';
import { Animal } from 'src/app/models/Animal';
import { Lancamento } from 'src/app/models/Lancamento';
import { LancamentoFinanceiroService } from 'src/app/pages/financeiro/lancamento-financeiro/lancamento-financeiro.service';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-resumo-animal',
  templateUrl: './resumo-custo-animal.component.html',
  styleUrls: ['./resumo-custo-animal.component.css'],
})
export class ResumoCustoAnimalComponent implements OnInit {
  lancamentos: Lancamento[];
  animal: Animal;
  labels: string[] = [];
  dataObj: any[] = [];
  data: number[] = [];
  colors: string[] = [];
  filtroValue: string;
  lancamentosFiltrados: Lancamento[];
  constructor(
    private service: AnimalService,
    private lancamentoService: LancamentoFinanceiroService
  ) {}

  ngOnInit(): void {
    if (this.service.animal) {
      this.animal = this.service.animal;
      this.lancamentoService
        .listar([{ key: 'animal.id', op: '==', value: this.animal?.id }])
        .then((doc) => {
          this.lancamentos = doc as Lancamento[];
          this.lancamentos.map((lancamento) => {
            this.labels.includes(lancamento.centroDeCusto?.nome)
              ? ''
              : this.labels.push(lancamento.centroDeCusto?.nome);
            if (
              this.dataObj.filter(
                (e) => e?.centroCusto === lancamento?.centroDeCusto?.nome
              ).length == 0
            ) {
              this.dataObj.push({
                centroCusto: lancamento.centroDeCusto?.nome,
                valor: lancamento?.valorDocumento,
              });
            } else {
              var index = this.dataObj
                .map(function (e) {
                  return e.centroCusto;
                })
                .indexOf(lancamento.centroDeCusto?.nome);
              this.dataObj[index].valor += lancamento?.valorDocumento;
            }
          });

          this.lancamentosFiltrados = this.lancamentos;

          this.dataObj.map((obj) => {
            this.data.push(obj?.valor);
          });

          this.labels.map(() => {
            this.colors.push(this.random_rgba());
          });

          this.produzirGrafico();
        });
    }
  }

  produzirGrafico() {
    var myChart = new Chart('myChart1', {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: this.data,
            backgroundColor: this.colors,
            hoverOffset: 4,
          },
        ],
      },
    });
  }

  random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 230;
    return (
      'rgba(' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      r().toFixed(1) +
      ')'
    );
  }

  limparFiltro() {}

  filtrarLancamentos(operacao: string) {}
}
