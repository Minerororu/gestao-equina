import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAnimalComponent } from './pages/animal/animal/form-animal/form-animal.component';
import { ListAnimalComponent } from './pages/animal/animal/list-animal/list-animal.component';
import { ResumoAnimalComponent } from './pages/animal/animal/resumo-animal/resumo-animal.component';
import { FormControleSaidaComponent } from './pages/animal/controle-movimento/form-controle-movimento/form-controle-movimento.component';
import { ListControleMovimentoComponent } from './pages/animal/controle-movimento/list-controle-movimento/list-controle-movimento.component';
import { FormDadosBiometricosComponent } from './pages/animal/dados-biometricos/form-dados-biometricos/form-dados-biometricos.component';
import { ListDadosBiometricosComponent } from './pages/animal/dados-biometricos/list-dados-biometricos/list-dados-biometricos.component';
import { ResumoCrescimentoComponent } from './pages/animal/dados-biometricos/resumo-crescimento/resumo-crescimento.component';
import { ResumoDadosBiometricosComponent } from './pages/animal/dados-biometricos/resumo-dados-biometricos/resumo-dados-biometricos.component';
import { FormExaminacaoComponent } from './pages/veterinario/examinacao/form-examinacao/form-examinacao.component';
import { ListExaminacaoComponent } from './pages/veterinario/examinacao/list-examinacao/list-examinacao.component';
import { FormFerrageamentoComponent } from './pages/veterinario/ferrageamento/form-ferrageamento/form-ferrageamento.component';
import { ListFerrageamentoComponent } from './pages/veterinario/ferrageamento/list-ferrageamento/list-ferrageamento.component';
import { FormRegistroClinicoComponent } from './pages/veterinario/registro-clinico/form-registro-clinico/form-registro-clinico.component';
import { ListRegistroClinicoComponent } from './pages/veterinario/registro-clinico/list-registro-clinico/list-registro-clinico.component';
import { FormVacinaComponent } from './pages/farmacia/vacina/form-vacina/form-vacina.component';
import { ListVacinaComponent } from './pages/farmacia/vacina/list-vacina/list-vacina.component';
import { FormVacinacaoComponent } from './pages/veterinario/vacinacao/form-vacinacao/form-vacinacao.component';
import { ListVacinacaoComponent } from './pages/veterinario/vacinacao/list-vacinacao/list-vacinacao.component';
import { FormVermifugacaoComponent } from './pages/veterinario/vermifugacao/form-vermifugacao/form-vermifugacao.component';
import { ListVermifugacaoComponent } from './pages/veterinario/vermifugacao/list-vermifugacao/list-vermifugacao.component';
import { FormVermifugoComponent } from './pages/farmacia/vermifugo/form-vermifugo/form-vermifugo.component';
import { ListVermifugoComponent } from './pages/farmacia/vermifugo/list-vermifugo/list-vermifugo.component';
import { ListExameComponent } from './pages/farmacia/exame/list-exame/list-exame.component';
import { FormExameComponent } from './pages/farmacia/exame/form-exame/form-exame.component';
import { FormCadastroProcedimentoComponent } from './pages/farmacia/cadastro-procedimento/form-cadastro-procedimento/form-cadastro-procedimento.component';
import { ListCadastroProcedimentoComponent } from './pages/farmacia/cadastro-procedimento/list-cadastro-procedimento/list-cadastro-procedimento.component';
import { FormUsoProcedimentoComponent } from './pages/veterinario/uso-procedimento/form-uso-procedimento/form-uso-procedimento.component';
import { ListUsoProcedimentoComponent } from './pages/veterinario/uso-procedimento/list-uso-procedimento/list-uso-procedimento.component';
import { FormControleReproducaoComponent } from './pages/reproducao/controle-reproducao/form-controle-reproducao/form-controle-reproducao.component';
import { ListControleReproducaoComponent } from './pages/reproducao/controle-reproducao/list-controle-reproducao/list-controle-reproducao.component';
import { NascimentosComponent } from './pages/reproducao/nascimentos/nascimentos.component';
import { FormControleColetaSemenComponent } from './pages/reproducao/semen/controle-coleta-semen/form-controle-coleta-semen/form-controle-coleta-semen.component';
import { ListControleColetaSemenComponent } from './pages/reproducao/semen/controle-coleta-semen/list-controle-coleta-semen/list-controle-coleta-semen.component';
import { FormControleFolicularComponent } from './pages/reproducao/controle-folicular/form-controle-folicular/form-controle-folicular.component';
import { ListControleFolicularComponent } from './pages/reproducao/controle-folicular/list-controle-folicular/list-controle-folicular.component';
import { FormLancamentoFinanceiroComponent } from './pages/financeiro/lancamento-financeiro/form-lancamento-financeiro/form-lancamento-financeiro.component';
import { ListLancamentoFinanceiroComponent } from './pages/financeiro/lancamento-financeiro/list-lancamento-financeiro/list-lancamento-financeiro.component';
import { FormContaFinanceiraComponent } from './pages/financeiro/conta-financeira/form-conta-financeira/form-conta-financeira.component';
import { ListContaFinanceiraComponent } from './pages/financeiro/conta-financeira/list-conta-financeira/list-conta-financeira.component';
import { ListCentroCustoComponent } from './pages/financeiro/centro-custo/list-centro-custo/list-centro-custo.component';
import { FormCentroCustoComponent } from './pages/financeiro/centro-custo/form-centro-custo/form-centro-custo.component';
import { ResumoCustoAnimalComponent } from './pages/animal/animal/resumo-custo-animal/resumo-custo-animal.component';
import { FormDemonstrativoComponent } from './pages/financeiro/demonstrativo/form-demonstrativo/form-demonstrativo.component';
import { ListDemonstrativoComponent } from './pages/financeiro/demonstrativo/list-demonstrativo/list-demonstrativo.component';
import { ResumoDemonstrativoComponent } from './pages/financeiro/demonstrativo/resumo-demonstrativo/resumo-demonstrativo.component';
import { DreAnualComponent } from './pages/financeiro/lancamento-financeiro/dre-anual/dre-anual.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { SignUpComponent } from './pages/usuario/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full' },

  { path: 'form-animal', component: FormAnimalComponent },
  { path: 'list-animal', component: ListAnimalComponent },
  { path: 'resumo-animal', component: ResumoAnimalComponent },
  { path: 'resumo-custo-animal', component: ResumoCustoAnimalComponent },

  { path: 'form-controle-movimento', component: FormControleSaidaComponent },
  {
    path: 'list-controle-movimento',
    component: ListControleMovimentoComponent,
  },

  { path: 'form-dados-biometricos', component: FormDadosBiometricosComponent },
  { path: 'list-dados-biometricos', component: ListDadosBiometricosComponent },
  {
    path: 'resumo-dados-biometricos',
    component: ResumoDadosBiometricosComponent,
  },
  { path: 'resumo-crescimento', component: ResumoCrescimentoComponent },

  { path: 'form-registro', component: FormRegistroClinicoComponent },
  { path: 'list-registro', component: ListRegistroClinicoComponent },

  { path: 'form-vacinacao', component: FormVacinacaoComponent },
  { path: 'list-vacinacao', component: ListVacinacaoComponent },

  { path: 'form-vermifugacao', component: FormVermifugacaoComponent },
  { path: 'list-vermifugacao', component: ListVermifugacaoComponent },

  { path: 'form-ferrageamento', component: FormFerrageamentoComponent },
  { path: 'list-ferrageamento', component: ListFerrageamentoComponent },

  { path: 'form-uso-procedimento', component: FormUsoProcedimentoComponent },
  { path: 'list-uso-procedimento', component: ListUsoProcedimentoComponent },

  { path: 'form-examinacao', component: FormExaminacaoComponent },
  { path: 'list-examinacao', component: ListExaminacaoComponent },

  { path: 'form-vacina', component: FormVacinaComponent },
  { path: 'list-vacina', component: ListVacinaComponent },

  { path: 'form-vermifugo', component: FormVermifugoComponent },
  { path: 'list-vermifugo', component: ListVermifugoComponent },

  { path: 'form-exame', component: FormExameComponent },
  { path: 'list-exame', component: ListExameComponent },

  {
    path: 'form-cadastro-procedimento',
    component: FormCadastroProcedimentoComponent,
  },
  {
    path: 'list-cadastro-procedimento',
    component: ListCadastroProcedimentoComponent,
  },

  {
    path: 'form-controle-reproducao',
    component: FormControleReproducaoComponent,
  },
  {
    path: 'list-controle-reproducao',
    component: ListControleReproducaoComponent,
  },

  { path: 'nascimentos', component: NascimentosComponent },

  {
    path: 'form-controle-coleta-semen',
    component: FormControleColetaSemenComponent,
  },
  {
    path: 'list-controle-coleta-semen',
    component: ListControleColetaSemenComponent,
  },

  {
    path: 'form-controle-folicular',
    component: FormControleFolicularComponent,
  },
  {
    path: 'list-controle-folicular',
    component: ListControleFolicularComponent,
  },

  {
    path: 'form-lancamento-financeiro',
    component: FormLancamentoFinanceiroComponent,
  },
  {
    path: 'list-lancamento-financeiro',
    component: ListLancamentoFinanceiroComponent,
  },

  { path: 'form-conta-financeira', component: FormContaFinanceiraComponent },
  { path: 'list-conta-financeira', component: ListContaFinanceiraComponent },

  { path: 'form-centro-custo', component: FormCentroCustoComponent },
  { path: 'list-centro-custo', component: ListCentroCustoComponent },

  { path: 'form-demonstrativo', component: FormDemonstrativoComponent },
  { path: 'list-demonstrativo', component: ListDemonstrativoComponent },
  { path: 'resumo-demonstrativo', component: ResumoDemonstrativoComponent },
  { path: 'dre-anual', component: DreAnualComponent },

  { path: 'log-in', component: LoginComponent },

  { path: 'register-user', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
