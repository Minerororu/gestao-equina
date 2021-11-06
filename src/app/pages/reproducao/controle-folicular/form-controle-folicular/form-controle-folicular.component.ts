import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ANIMAIS_CL,
  CADASTRO_PROCEDIMENTO_CL,
  RESPONSAVEL_CL,
} from 'src/app/components/constants/constants';
import { hoje } from 'src/app/helpers/function';
import { ControleFolicular } from 'src/app/models/ControleFolicular';
import { UsoProcedimento } from 'src/app/models/UsoProcedimento';
import { UsoProcedimentoService } from 'src/app/pages/veterinario/uso-procedimento/uso-procedimento.service';
import { ControleFolicularService } from '../controle-folicular.service';

@Component({
  selector: 'app-form-controle-folicular',
  templateUrl: './form-controle-folicular.component.html',
  styleUrls: ['./form-controle-folicular.component.css'],
})
export class FormControleFolicularComponent implements OnInit {
  controle: ControleFolicular;
  animal_collection = ANIMAIS_CL;
  procedimento_collection = CADASTRO_PROCEDIMENTO_CL;
  responsavel_collection = RESPONSAVEL_CL;
  constructor(
    private service: ControleFolicularService,
    private router: Router,
    private usoProcedimentoService: UsoProcedimentoService
  ) {}

  ngOnInit(): void {
    this.controle = this.service.controle
      ? this.service.controle
      : new ControleFolicular();
    this.controle.dadosControle
      ? ''
      : (this.controle.dadosControle = {
          responsavel: null,
          data: null,
          procedimento: null,
          descricao: null,
          ovarioDireito: null,
          ovarioEsquerdo: null,
          observacoes: null,
          utero: null,
        });
  }

  submit() {
    if (this.service.bloquearEdicao && this.controle.bloquearEdicao) {
      alert('Este controle não pode ser editado');
    } else {
      this.controle.ultimaEdicao = hoje();
      this.controle.bloquearEdicao ? '' : (this.service.bloquearEdicao = false);
      this.controle?.dadosControle.procedimento
        ? this.criarUsoProcedimento()
        : '';
      this.service.salvar(this.controle);
      this.router.navigate(['list-controle-folicular']);
    }
  }
  criarUsoProcedimento() {
    alert(
      `O animal ${this.controle.animal.nome}, acaba de usar o procedimento: ${this.controle.dadosControle.procedimento.nome}!`
    );
    let usoProcedimento = new UsoProcedimento();
    usoProcedimento.id = this.controle.id;
    usoProcedimento.categoria = 'Reprodução';
    usoProcedimento.animal = this.controle.animal;
    usoProcedimento.responsavel = this.controle.responsavel;
    usoProcedimento.data = this.controle.dataInicio;
    usoProcedimento.procedimento = this.controle.dadosControle.procedimento;
    usoProcedimento.descricao = this.controle.dadosControle.descricao;
    this.usoProcedimentoService.salvar(usoProcedimento);
  }
}
