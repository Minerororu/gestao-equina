import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMAIS_CL, VACINA_CL } from 'src/app/components/constants/constants';
import { hoje } from 'src/app/helpers/function';
import { Vacinacao } from 'src/app/models/Vacinacao';
import { VacinacaoService } from '../vacinacao.service';

@Component({
  selector: 'form-vacinacao',
  templateUrl: './form-vacinacao.component.html',
  styleUrls: ['./form-vacinacao.component.css']
})
export class FormVacinacaoComponent implements OnInit {
  vacinacao : Vacinacao;
  animal_collection = ANIMAIS_CL;
  vacina_collection = VACINA_CL;
    constructor(private service: VacinacaoService, private router: Router) { }

  ngOnInit(): void {
    this.vacinacao = this.service.vacinacao ? this.service.vacinacao: new Vacinacao();
  }

  submit(){
    if(this.service.bloquearEdicao && this.vacinacao.bloquearEdicao){
      alert('Esta vacinação não pode ser editada');
    }else{
      this.vacinacao.ultimaEdicao = hoje();
      this.vacinacao.bloquearEdicao ? '': this.service.bloquearEdicao = false;
      this.service.salvar(this.vacinacao);
      this.router.navigate(['list-vacinacao']);
    };
  }
}
