import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMAIS_CL, EXAME_CL, RESPONSAVEL_CL } from 'src/app/components/constants/constants';
import { hoje } from 'src/app/helpers/function';
import { Examinacao } from 'src/app/models/Examinacao';
import { ExaminacaoService } from '../examinacao.service';

@Component({
  selector: 'form-examinacao',
  templateUrl: './form-examinacao.component.html',
  styleUrls: ['./form-examinacao.component.css'],
})
export class FormExaminacaoComponent implements OnInit {
  examinacao: Examinacao;
  animal_collection = ANIMAIS_CL;
  exame_collection = EXAME_CL;
  responsavel_collection = RESPONSAVEL_CL;
  constructor(private service: ExaminacaoService, private router: Router) {}

  ngOnInit(): void {
    this.examinacao = this.service.examinacao
      ? this.service.examinacao
      : new Examinacao();
    console.log(this.service.bloquearEdicao);
  }

  set(param: any) {
    param == undefined ? (param = false) : '';
    param = !param;
  }

  submit() {
    if (this.service.bloquearEdicao && this.examinacao.bloquearEdicao) {
      alert('Esta Examinacao, não pode ser editada');
    } else {
      this.examinacao.ultimaEdicao = hoje();
      this.examinacao.bloquearEdicao
        ? ''
        : (this.service.bloquearEdicao = false);
      this.service.salvar(this.examinacao);
      this.router.navigate(['list-examinacao']);
    }
  }
}
