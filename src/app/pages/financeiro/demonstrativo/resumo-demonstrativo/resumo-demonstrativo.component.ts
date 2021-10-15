import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Demonstrativo } from 'src/app/models/Demonstrativo';
import { Lancamento } from 'src/app/models/Lancamento';
import { LancamentoFinanceiroService } from '../../lancamento-financeiro/lancamento-financeiro.service';
import { DemonstrativoService } from '../demonstrativo.service';

@Component({
  selector: 'app-resumo-demonstrativo',
  templateUrl: './resumo-demonstrativo.component.html',
  styleUrls: ['./resumo-demonstrativo.component.css']
})
export class ResumoDemonstrativoComponent implements OnInit {

  lancamentosFiltrados: Lancamento[] = [];
  lancamentos: Lancamento[];
  demonstrativo: Demonstrativo;
  labels: unknown[] = [];
  dataGrafico: any[] = [];
  colors: any[] = [];
  dataObjArr: any[] = [];
  constructor(private lancamentoService: LancamentoFinanceiroService, private service: DemonstrativoService) { }

  ngOnInit(): void {
    this.demonstrativo = this.service.demonstrativo;
    this.lancamentoService.listar().then(doc => {
      this.lancamentos = doc as Lancamento[];
      this.filtrarLancamentos();
      this.lancamentosFiltrados.map(lancamento => {
        if(this.demonstrativo.componentes == 'Centros Financeiros'){
          !this.labels.includes(lancamento.centroDeCusto?.nome) && lancamento.centroDeCusto?.nome ? this.labels.push(lancamento.centroDeCusto?.nome): '';
          if (this.dataObjArr.filter(e => e?.centroCusto === lancamento?.centroDeCusto?.nome).length == 0) {
            this.dataObjArr.push({centroCusto: lancamento.centroDeCusto?.nome, valor: lancamento?.valorDocumento});
          }else{
            var index = this.dataObjArr.map(function(e) { return e.centroCusto; }).indexOf(lancamento.centroDeCusto?.nome);
            this.dataObjArr[index].valor += lancamento?.valorDocumento;
          }
        }
        
        if(this.demonstrativo.componentes == 'Grupos de Centros') {
          !this.labels.includes(lancamento.centroDeCusto?.grupo.nome) && lancamento.centroDeCusto?.grupo.nome ? this.labels.push(lancamento.centroDeCusto?.grupo.nome): '';
          if(this.dataObjArr.filter(e => e?.grupo === lancamento?.centroDeCusto?.grupo.nome).length == 0) {
            this.dataObjArr.push({grupo: lancamento.centroDeCusto?.grupo.nome, valor: lancamento?.valorDocumento});
          }else{
            var index = this.dataObjArr.map(function(e) { return e.grupo; }).indexOf(lancamento.centroDeCusto?.grupo.nome);
            this.dataObjArr[index].valor += lancamento?.valorDocumento;
          }
        }
      })
      
      this.dataObjArr.map(obj => {
        this.dataGrafico.push(obj?.valor);
      })
      
      this.labels.map(()=> {
        console.log(this.random_rgba());
        this.colors.push(this.random_rgba());
      })
      this.produzirGrafico();
    })
  }

  filtrarLancamentos(){
    if(this.demonstrativo.componentes == 'Centros Financeiros'){ 
    this.demonstrativo?.centrosDeCustos.map(centro => {
      this.lancamentos.map(lancamento => {
          lancamento.centroDeCusto?.nome == centro.nome? this.lancamentosFiltrados.push(lancamento):'';
        })
      })
    }else {
      this.demonstrativo?.grupos.map(grupo => {
        this.lancamentos.map(lancamento => {
            lancamento.centroDeCusto?.grupo.nome == grupo.nome? this.lancamentosFiltrados.push(lancamento):'';
          })
        })
    }
  }

  produzirGrafico(){
    
    
    
    var myChart = new Chart('myChart1', {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'My First Dataset',
          data: this.dataGrafico,
          backgroundColor: this.colors,
          hoverOffset: 4
        }]
      },
    });
  }

  random_rgba() {
    var o = Math.round, r = Math.random, s = 200;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
  }
}
