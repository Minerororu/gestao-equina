import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMAIS_CL, VERMIFUGO_CL } from 'src/app/components/constants/constants';
import { hoje } from 'src/app/helpers/function';
import { Vermifugacao } from 'src/app/models/Vermifugacao';
import { VermifugacaoService } from '../vermifugacao.service';

@Component({
  selector: 'form-vermifugacao',
  templateUrl: './form-vermifugacao.component.html',
  styleUrls: ['./form-vermifugacao.component.css']
})
export class FormVermifugacaoComponent implements OnInit {
  vermifugacao : Vermifugacao;
  animal_collection = ANIMAIS_CL;
  vermifugo_collection = VERMIFUGO_CL;
  constructor(private service: VermifugacaoService, private router: Router) { }

  ngOnInit(): void {
    this.vermifugacao = this.service.vermifugacao ? this.service.vermifugacao: new Vermifugacao();
  }

  set(param: any){
    param == undefined ? param = false : '';
    param = !param;
  }

  submit(){
    if(this.service.bloquearEdicao && this.vermifugacao.bloquearEdicao){
      alert('Esta vermífugação, não pode ser editada')
    }else{
      this.vermifugacao.ultimaEdicao = hoje()
      this.vermifugacao.bloquearEdicao ? '': this.service.bloquearEdicao = false;
      this.service.salvar(this.vermifugacao);
      this.router.navigate(['list-vermifugacao']);
    }
  }
}
