import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMAIS_CL, CENTRO_CUSTO_CL, CONTA_CL} from 'src/app/components/constants/constants';
import { ContaFinanceira } from 'src/app/models/ContaFinanceira';
import { Lancamento } from 'src/app/models/Lancamento';
import { ContaFinanceiraService } from '../../conta-financeira/conta-financeira.service';
import { LancamentoFinanceiroService } from '../lancamento-financeiro.service';

@Component({
  selector: 'app-form-lancamento-financeiro',
  templateUrl: './form-lancamento-financeiro.component.html',
  styleUrls: ['./form-lancamento-financeiro.component.css']
})
export class FormLancamentoFinanceiroComponent implements OnInit {
  lancamento: Lancamento;
  oldLancamento: Lancamento;
  centro_de_custo_collection = CENTRO_CUSTO_CL;
  conta_financeira_collection = CONTA_CL;
  animal_collection = ANIMAIS_CL;
  filtroCentroCusto: string[];
  canSubmit: boolean = true;
  editing: boolean;
  constructor(private service: LancamentoFinanceiroService,
              private router: Router,
              private contaService: ContaFinanceiraService) { }

  ngOnInit(): void {
    this.lancamento = this.service.lancamento? this.service.lancamento: new Lancamento();
    this.editing = this.service.editing;
    this.oldLancamento = JSON.parse(JSON.stringify(this.lancamento));
  }

  filtrar(){
    if(this.lancamento.operacao == 'Crédito'){
      this.filtroCentroCusto = ['categoria', '==', 'Receita'];
    }else if(this.lancamento.operacao == 'Débito'){
      this.filtroCentroCusto = ['categoria', '==', 'Despesa'];
    }
  }

  debitar_creditar(lancamento){
    let conta = new ContaFinanceira;
    if(lancamento.operacao == 'Crédito'){
      conta = JSON.parse(JSON.stringify(lancamento.creditarNaConta));
      console.log(conta);
      conta.saldo += lancamento.valorDocumento;
      lancamento.creditarNaConta.saldo = conta.saldo;
    }else if(lancamento.operacao == 'Débito'){        
      conta = JSON.parse(JSON.stringify(lancamento.debitarNaConta));
      console.log(this.editing)
      console.log(conta);
      if(conta.saldo - lancamento.valorDocumento >= 0){
        conta.saldo -= lancamento.valorDocumento;
        lancamento.debitarNaConta.saldo = conta.saldo;
      }else{
        alert(`A conta: ${conta.nome}, não tem saldo suficiente para realizar a operação`)
        this.canSubmit = false;
      }
    }
    this.contaService.salvar(conta);
  }

  submit(lancamento){
    if(this.canSubmit){
      lancamento.pagamentoEfetuado || lancamento.pagamentosEfetuados >= 1 && this.oldLancamento.valorDocumento != lancamento.valorDocumento && !this.editing?  this.debitar_creditar(lancamento):'';
      this.service.salvar(lancamento);
      this.router.navigate(['list-lancamento-financeiro']);
    }
  }
}
