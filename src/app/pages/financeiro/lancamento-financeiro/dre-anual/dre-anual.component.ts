import { Component, OnInit } from '@angular/core';
import { Lancamento } from 'src/app/models/Lancamento';
import { LancamentoFinanceiroService } from '../lancamento-financeiro.service';

@Component({
  selector: 'app-dre-anual',
  templateUrl: './dre-anual.component.html',
  styleUrls: ['./dre-anual.component.css']
})
export class DreAnualComponent implements OnInit {
  lancamentos: Lancamento[];
  labels: string[] = [];
  objsDaTabela: {centroCusto: string, valoresMeses: number[]}[] = [];
  lancamentosFiltrados: Lancamento[];
  ano: string;
  constructor(private service: LancamentoFinanceiroService) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.lancamentos = doc as Lancamento[];
      this.lancamentosFiltrados = this.lancamentos;
      this.calcularData();
    })
  }

  calcularData() {
    this.lancamentos.map(lancamento => {
      if(lancamento.data.charAt(1) == '/'){
        lancamento.data = '0' + lancamento.data
      }
      
      if(lancamento.data.charAt(4) == '/'){
        let lancamentoArr = lancamento.data.split('/');
        lancamento.data = lancamentoArr[0] + '/' + '0' + lancamentoArr[1] + '/' + lancamentoArr[2]
      }
    })
  }

  filtrar(){
    this.lancamentos = this.lancamentos.filter(lancamento => {
      let ano = lancamento.data.charAt(6) + lancamento.data.charAt(7) + lancamento.data.charAt(8) + lancamento.data.charAt(9)
      return ano == this.ano
    })
    this.calcularTabela()
  }

  calcularTabela(){
    this.lancamentosFiltrados.map(lancamento => {
      lancamento.valoresPorMeses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      switch(lancamento.data.charAt(3) + lancamento.data.charAt(4)){
        case '01': lancamento.valoresPorMeses[0] += lancamento.valorDocumento; break;
        case '02': lancamento.valoresPorMeses[1] += lancamento.valorDocumento; break;
        case '03': lancamento.valoresPorMeses[2] += lancamento.valorDocumento; break;
        case '04': lancamento.valoresPorMeses[3] += lancamento.valorDocumento; break;
        case '05': lancamento.valoresPorMeses[4] += lancamento.valorDocumento; break;
        case '06': lancamento.valoresPorMeses[5] += lancamento.valorDocumento; break;
        case '07': lancamento.valoresPorMeses[6] += lancamento.valorDocumento; break;
        case '08': lancamento.valoresPorMeses[7] += lancamento.valorDocumento; break;
        case '09': lancamento.valoresPorMeses[8] += lancamento.valorDocumento; break;
        case '10': lancamento.valoresPorMeses[9] += lancamento.valorDocumento; break;
        case '11': lancamento.valoresPorMeses[10] += lancamento.valorDocumento; break;
        case '12': lancamento.valoresPorMeses[11] += lancamento.valorDocumento; break;
      }

      if(!this.labels.includes(lancamento.centroDeCusto?.nome) && lancamento.centroDeCusto?.nome){
        this.labels.push(lancamento.centroDeCusto?.nome);
        this.objsDaTabela.push({centroCusto: lancamento.centroDeCusto.nome, valoresMeses: lancamento.valoresPorMeses})
      }else{
        var index = this.objsDaTabela.map(function(e) { return e.centroCusto; }).indexOf(lancamento.centroDeCusto?.nome);
        for(let i = 0; i < this.objsDaTabela[index].valoresMeses.length; i++){
          if(i+1 == parseInt(lancamento.data.charAt(3) + lancamento.data.charAt(4))){
            this.objsDaTabela[index].valoresMeses[i] += lancamento.valorDocumento;
          }
        }
      }
    })
  }
}
