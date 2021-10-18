import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dateToStr, hoje, strToDate } from 'src/app/helpers/function';
import { Lancamento } from 'src/app/models/Lancamento';
import { FormLancamentoFinanceiroComponent } from '../form-lancamento-financeiro/form-lancamento-financeiro.component';
import { LancamentoFinanceiroService } from '../lancamento-financeiro.service';

@Component({
  selector: 'app-list-lancamento-financeiro',
  templateUrl: './list-lancamento-financeiro.component.html',
  styleUrls: ['./list-lancamento-financeiro.component.css'],
})
export class ListLancamentoFinanceiroComponent implements OnInit {
  operacao: string;
  lancamentos: Lancamento[];
  lancamentosFiltrados: Lancamento[];
  recebimentos: number = 0;
  despesas: number = 0;
  saldo: number = 0;
  dataInicio: any;
  dataFinal: any;
  dataInicioDate: any;
  dataFinalDate: any;
  constructor(
    private service: LancamentoFinanceiroService,
    private router: Router,
    private form: FormLancamentoFinanceiroComponent
  ) {}

  ngOnInit(): void {
    this.service.listar().then((doc) => {
      this.lancamentos = doc as Lancamento[];
      this.checkOperacao();
      this.lancamentos.map((lancamento) => {
        lancamento.quantidadeRepeticao > lancamento.pagamentosEfetuados
          ? this.repetirPagamento(lancamento)
          : '';
      });
    });
  }

  checkOperacao() {
    if (this.operacao != 'Relatório') {
      this.lancamentosFiltrados = this.lancamentos.filter((lancamento) => {
        return lancamento.operacao == this.operacao;
      });
    } else {
      this.lancamentosFiltrados = this.lancamentos;
      this.lancamentos.map((lancamento) => {
        if (lancamento.operacao == 'Débito') {
          this.despesas += lancamento?.valorDocumento;
        } else {
          this.recebimentos += lancamento?.valorDocumento;
        }
      });
      this.saldo = this.recebimentos - this.despesas;
    }
  }

  converterToDate() {
    let arr;
    if (this.dataInicio) {
      arr = this.dataInicio.toString().split('/');
      this.dataInicioDate = new Date(arr[2], arr[1] - 1, arr[0]);
    }
    if (this.dataFinal) {
      arr = this.dataFinal.toString().split('/');
      this.dataFinalDate = new Date(arr[2], arr[1] - 1, arr[0]);
    }
    this.filtrar();
  }

  filtrar() {
    this.lancamentosFiltrados = this.lancamentos.filter((lancamento) => {
      let arr = lancamento?.data.toString().split('/');
      let aDate = new Date(Number(arr[2]), Number(arr[1]) - 1, Number(arr[0]));
      if (this.dataFinalDate && this.dataInicioDate) {
        return aDate <= this.dataFinalDate && aDate >= this.dataInicioDate;
      } else if (this.dataFinalDate) {
        return aDate <= this.dataFinalDate;
      } else if (this.dataInicioDate) {
        return aDate >= this.dataInicioDate;
      }
      return true;
    });
  }

  edit(lancamento: Lancamento) {
    this.service.lancamento = lancamento;
    this.service.editing = true;
    this.router.navigate(['form-lancamento-financeiro']);
  }

  delete(lancamento: Lancamento) {
    this.service.remover(lancamento);
    this.service.listar().then((doc) => {
      this.lancamentos = doc as Lancamento[];
      this.checkOperacao();
    });
  }

  adicionar() {
    this.service.lancamento = new Lancamento();
    this.service.editing = false;
    this.router.navigate(['form-lancamento-financeiro']);
  }

  repetirPagamento(lancamento: Lancamento) {
    let newLancamento = new Lancamento();
    let dataInicio = strToDate(lancamento.data);
    let dataLimite = dataInicio;
    dataLimite.setMilliseconds(strToDate(hoje()).getMilliseconds());
    switch (lancamento.repetir) {
      case 'Semanalmente':
        dataLimite.setDate(dataInicio.getDate() + 7);
        break;
      case 'Quinzenalmente':
        dataLimite.setDate(dataInicio.getDate() + 15);
        break;
      case 'Mestralmente':
        dataLimite.setMonth(dataInicio.getMonth() + 1);
        break;
      case 'Bimestralmente':
        dataLimite.setMonth(dataInicio.getMonth() + 2);
        break;
      case 'Trimestralmente':
        dataLimite.setMonth(dataInicio.getMonth() + 3);
        break;
      case 'Semestralmente':
        dataLimite.setMonth(dataInicio.getMonth() + 6);
        break;
      case 'Anualmente':
        dataLimite.setFullYear(dataInicio.getFullYear() + 1);
        break;
    }

    const createNewLancamento = () => {
      newLancamento.centroDeCusto = lancamento.centroDeCusto;
      newLancamento.contaFinanceira = lancamento.contaFinanceira;
      newLancamento.data = lancamento.data;
      newLancamento.descricao = lancamento.descricao;
      newLancamento.docNum = lancamento.docNum;
      newLancamento.operacao = lancamento.operacao;
      newLancamento.pagamentoEfetuado = lancamento.pagamentoEfetuado;
      newLancamento.pagamentosEfetuados = lancamento.pagamentosEfetuados;
      newLancamento.quantidadeRepeticao = lancamento.quantidadeRepeticao;
      newLancamento.pagamento_recebimento = lancamento.pagamento_recebimento;
      newLancamento.repetir = lancamento.repetir;
      newLancamento.valorDocumento = lancamento.valorDocumento;
      newLancamento.filho = true;
    };

    if (
      JSON.parse(JSON.stringify(strToDate(hoje()))) >=
        JSON.parse(JSON.stringify(dataLimite)) &&
      !lancamento.filho
    ) {
      alert(`mensage teste ${lancamento.valorDocumento} reais foram pagos`);
      lancamento.pagamentosEfetuados++;
      createNewLancamento();
      lancamento.data = dateToStr(dataLimite);
      this.service.salvar(lancamento);
      this.form.submit(newLancamento);
      this.service.listar().then((doc) => {
        this.lancamentos = doc as Lancamento[];
        this.checkOperacao();
      });
    }

    if (
      JSON.parse(JSON.stringify(strToDate(hoje()))) >=
        JSON.parse(JSON.stringify(dataLimite)) &&
      !lancamento.filho
    ) {
      this.repetirPagamento(lancamento);
    }
  }
}
