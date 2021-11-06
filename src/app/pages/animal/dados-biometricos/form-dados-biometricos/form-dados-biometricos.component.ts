import { Component, OnInit } from '@angular/core';
import { ANIMAIS_CL, RESPONSAVEL_CL } from 'src/app/components/constants/constants';
import { AnimalService } from '../../animal/animal.service';
import { DadosBiometricosService } from '../dados-biometricos.service';
import { DadosBiometricos } from 'src/app/models/DadosBiometricos';
import { hoje } from 'src/app/helpers/function';

@Component({
  selector: 'app-form-dados-biometricos',
  templateUrl: './form-dados-biometricos.component.html',
  styleUrls: ['./form-dados-biometricos.component.css'],
})
export class FormDadosBiometricosComponent implements OnInit {
  ultimaEdicao: Date;
  dado: DadosBiometricos;
  constructor(private service: DadosBiometricosService) {}
  animal_collection = ANIMAIS_CL;
  responsavel_collection = RESPONSAVEL_CL;
  ngOnInit(): void {
    this.dado = this.service.dado ? this.service.dado : new DadosBiometricos();
  }

  calcular() {
    this.dado.ultimaEdicao = hoje();
    this.dado.IC = ((this.dado.corpo / this.dado.toracico) * 100).toFixed(2);
    this.dado.IM = (
      this.dado.codilhoSolo /
      (this.dado.antebraco + this.dado.joelho + this.dado.canela)
    ).toFixed(2);
    this.dado.IDT = ((this.dado.canela / this.dado.toracico) * 100).toFixed(2);
    this.dado.ICC = (this.dado.canela / this.dado.peso).toFixed(2);
  }

  submit() {
    this.calcular();
    this.service.salvar(this.dado);
  }
}
