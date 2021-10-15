import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAnimalComponent } from './animal/animal/list-animal/list-animal.component';
import { FormAnimalComponent } from './animal/animal/form-animal/form-animal.component';
import { ComponentModule } from '../components/component.module';
import { ImportModule } from '../import.module';
import { FormControleSaidaComponent } from './animal/controle-movimento/form-controle-movimento/form-controle-movimento.component';
import { ListControleMovimentoComponent } from './animal/controle-movimento/list-controle-movimento/list-controle-movimento.component';
import { FormDadosBiometricosComponent } from './animal/dados-biometricos/form-dados-biometricos/form-dados-biometricos.component';
import { ListDadosBiometricosComponent } from './animal/dados-biometricos/list-dados-biometricos/list-dados-biometricos.component';
import { ResumoAnimalComponent } from './animal/animal/resumo-animal/resumo-animal.component';
import { ResumoDadosBiometricosComponent } from './animal/dados-biometricos/resumo-dados-biometricos/resumo-dados-biometricos.component';
import { ResumoCrescimentoComponent } from './animal/dados-biometricos/resumo-crescimento/resumo-crescimento.component';
import { FormControleReproducaoComponent } from './reproducao/controle-reproducao/form-controle-reproducao/form-controle-reproducao.component';
import { ListControleReproducaoComponent } from './reproducao/controle-reproducao/list-controle-reproducao/list-controle-reproducao.component';
import { FormVacinacaoComponent } from './veterinario/vacinacao/form-vacinacao/form-vacinacao.component';
import { ListVacinacaoComponent } from './veterinario/vacinacao/list-vacinacao/list-vacinacao.component';
import { FormVermifugacaoComponent } from './veterinario/vermifugacao/form-vermifugacao/form-vermifugacao.component';
import { ListVermifugacaoComponent } from './veterinario/vermifugacao/list-vermifugacao/list-vermifugacao.component';
import { FormExaminacaoComponent } from './veterinario/examinacao/form-examinacao/form-examinacao.component';
import { ListExaminacaoComponent } from './veterinario/examinacao/list-examinacao/list-examinacao.component';
import { FormRegistroClinicoComponent } from './veterinario/registro-clinico/form-registro-clinico/form-registro-clinico.component';
import { ListRegistroClinicoComponent } from './veterinario/registro-clinico/list-registro-clinico/list-registro-clinico.component';
import { FormFerrageamentoComponent } from './veterinario/ferrageamento/form-ferrageamento/form-ferrageamento.component';
import { ListFerrageamentoComponent } from './veterinario/ferrageamento/list-ferrageamento/list-ferrageamento.component';
import { FormVacinaComponent } from './farmacia/vacina/form-vacina/form-vacina.component';
import { ListVacinaComponent } from './farmacia/vacina/list-vacina/list-vacina.component';
import { FormVermifugoComponent } from './farmacia/vermifugo/form-vermifugo/form-vermifugo.component';
import { ListVermifugoComponent } from './farmacia/vermifugo/list-vermifugo/list-vermifugo.component';
import { ListExameComponent } from './farmacia/exame/list-exame/list-exame.component';
import { FormExameComponent } from './farmacia/exame/form-exame/form-exame.component';
import { FormCadastroProcedimentoComponent } from './farmacia/cadastro-procedimento/form-cadastro-procedimento/form-cadastro-procedimento.component';
import { ListCadastroProcedimentoComponent } from './farmacia/cadastro-procedimento/list-cadastro-procedimento/list-cadastro-procedimento.component';
import { ListUsoProcedimentoComponent } from './veterinario/uso-procedimento/list-uso-procedimento/list-uso-procedimento.component';
import { FormUsoProcedimentoComponent } from './veterinario/uso-procedimento/form-uso-procedimento/form-uso-procedimento.component';
import { NascimentosComponent } from './reproducao/nascimentos/nascimentos.component';
import { FormControleColetaSemenComponent } from './reproducao/semen/controle-coleta-semen/form-controle-coleta-semen/form-controle-coleta-semen.component';
import { ListControleColetaSemenComponent } from './reproducao/semen/controle-coleta-semen/list-controle-coleta-semen/list-controle-coleta-semen.component';
import { ModalComponent } from '../components/modal/modal.component';
import { FormControleFolicularComponent } from './reproducao/controle-folicular/form-controle-folicular/form-controle-folicular.component';
import { ListControleFolicularComponent } from './reproducao/controle-folicular/list-controle-folicular/list-controle-folicular.component';
import { FormLancamentoFinanceiroComponent } from './financeiro/lancamento-financeiro/form-lancamento-financeiro/form-lancamento-financeiro.component';
import { ListLancamentoFinanceiroComponent } from './financeiro/lancamento-financeiro/list-lancamento-financeiro/list-lancamento-financeiro.component';
import { FormContaFinanceiraComponent } from './financeiro/conta-financeira/form-conta-financeira/form-conta-financeira.component';
import { ListContaFinanceiraComponent } from './financeiro/conta-financeira/list-conta-financeira/list-conta-financeira.component';
import { FormCentroCustoComponent } from './financeiro/centro-custo/form-centro-custo/form-centro-custo.component';
import { ListCentroCustoComponent } from './financeiro/centro-custo/list-centro-custo/list-centro-custo.component';
import { ResumoCustoAnimalComponent } from './animal/animal/resumo-custo-animal/resumo-custo-animal.component';
import { FormDemonstrativoComponent } from './financeiro/demonstrativo/form-demonstrativo/form-demonstrativo.component';
import { ListDemonstrativoComponent } from './financeiro/demonstrativo/list-demonstrativo/list-demonstrativo.component';
import { ResumoDemonstrativoComponent } from './financeiro/demonstrativo/resumo-demonstrativo/resumo-demonstrativo.component';
import { DreAnualComponent } from './financeiro/lancamento-financeiro/dre-anual/dre-anual.component';
import { LoginComponent } from './usuario/login/login.component';
import { SignUpComponent } from './usuario/signup/signup.component';

@NgModule({
  declarations: [
    FormAnimalComponent,
    ListAnimalComponent,
    FormControleSaidaComponent,
    ListControleMovimentoComponent,
    FormDadosBiometricosComponent,
    ListDadosBiometricosComponent,
    ResumoAnimalComponent,
    ResumoDadosBiometricosComponent,
    ResumoCrescimentoComponent,
    ResumoCustoAnimalComponent,
    FormControleReproducaoComponent,
    ListControleReproducaoComponent,
    FormVacinacaoComponent,
    ListVacinacaoComponent,
    FormVermifugacaoComponent,
    ListVermifugacaoComponent,
    FormExaminacaoComponent,
    ListExaminacaoComponent, 
    FormRegistroClinicoComponent,
    ListRegistroClinicoComponent,
    FormFerrageamentoComponent,
    ListFerrageamentoComponent,
    FormVacinaComponent,
    ListVacinaComponent,
    FormVermifugoComponent,
    ListVermifugoComponent,
    ListExameComponent,
    FormExameComponent,
    FormCadastroProcedimentoComponent,
    ListCadastroProcedimentoComponent,
    ListUsoProcedimentoComponent,
    FormUsoProcedimentoComponent,
    NascimentosComponent,
    FormControleColetaSemenComponent,
    ListControleColetaSemenComponent,
    ModalComponent,
    FormControleFolicularComponent,
    ListControleFolicularComponent,
    FormLancamentoFinanceiroComponent,
    ListLancamentoFinanceiroComponent,
    FormContaFinanceiraComponent,
    ListContaFinanceiraComponent,
    FormCentroCustoComponent,
    ListCentroCustoComponent,
    FormDemonstrativoComponent,
    ListDemonstrativoComponent,
    ResumoDemonstrativoComponent,
    DreAnualComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    ComponentModule,
    ImportModule,
    CommonModule,
  ],
  providers: [
    FormLancamentoFinanceiroComponent
  ]
})
export class PagesModule { }
