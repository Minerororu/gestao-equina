import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Popper from 'popper.js';
import { AuthService } from 'src/app/helpers/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  titleService = { titulo: 'a' };
  constructor(public router: Router, private authService: AuthService) {}

  routes = [
    ['list-animal', 'list-controle-movimento', 'list-dados-biometricos'],
    [
      'list-registro',
      'list-examinacao',
      'list-vacinacao',
      'list-vermifugacao',
      'list-ferrageamento',
      'list-uso-procedimento',
    ],

    [
      'list-vacina',
      'list-vermifugo',
      'list-exame',
      'list-cadastro-procedimento',
    ],

    [
      'list-controle-reproducao',
      'nascimentos',
      'list-controle-coleta-semen',
      'list-controle-folicular',
    ],

    [
      'list-lancamento-financeiro',
      'list-conta-financeira',
      'list-centro-custo',
      'list-demonstrativo',
      'dre-anual',
    ],
  ];

  labels = [
    ['Animais', 'Animais', 'Controle de Movimento', 'Dados Biométricos'],
    [
      'Veterinário',
      'Registros Clínicos',
      'Examinações',
      'Vacinações',
      'Vermifugações',
      'Ferrageamentos',
      'Uso de Procidementos',
    ],
    [
      'Farmácia',
      'Vacinas',
      'Vermifugos',
      'Exames',
      'Cadastro de Procedimentos',
    ],
    [
      'Reprodução',
      'Controle de Reprodução',
      'Nascimentos',
      'Controle de Coleta de Semên',
      'Controle Folicular',
    ],
    [
      'Financeiro',
      'Lançamentos Financeiros',
      'Contas Financeiras',
      'Centros de Custo',
      'Demonstrativos',
      'Relatório Anual',
    ],
  ];

  ngOnInit(): void {}

  logOut() {
    this.authService.userData = null;
    localStorage.user = {};
    this.router.navigate(['log-in']);
  }
}
