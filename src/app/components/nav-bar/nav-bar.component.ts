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
      'list-vacinacao',
      'list-vermifugacao',
      'list-ferrageamento',
    ],

    [
      'list-vacina',
      'list-vermifugo',
      'list-doenca',
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
    ['list-responsavel']
  ];

  labels = [
    ['Animais', 'Animais', 'Controle de Movimento', 'Dados Biométricos'],
    [
      'Veterinário',
      'Registros Clínicos',
      'Vacinações',
      'Vermifugações',
      'Ferrageamentos',
    ],
    [
      'Farmácia',
      'Vacinas',
      'Vermifugos',
      'Doenças',
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
    [
      'Responsável',
      'Responsável'],
  ];

  ngOnInit(): void {}

  logOut() {
    this.authService.userData = null;
    localStorage.user = {};
    this.router.navigate(['log-in']);
  }
}
