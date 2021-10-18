import { Component, OnInit } from '@angular/core';
import { ANIMAIS_CL } from 'src/app/components/constants/constants';
import { hoje } from 'src/app/helpers/function';
import { ControleSaida } from 'src/app/models/ControleSaida';
import { AnimalService } from '../../animal/animal.service';
import { ControleMovimentoService } from '../controle-saida.service';

@Component({
  selector: 'app-form-controle-movimento',
  templateUrl: './form-controle-movimento.component.html',
  styleUrls: ['./form-controle-movimento.component.css'],
})
export class FormControleSaidaComponent implements OnInit {
  controle: ControleSaida;
  constructor(
    private service: ControleMovimentoService,
    private animalService: AnimalService
  ) {}
  animal_collection = ANIMAIS_CL;
  motivos = [
    'Competição',
    'Condomínio',
    'Doação',
    'Doma',
    'Filial',
    'Óbito',
    'Reprodução',
    'Retorno',
    'Tratamento Clínico',
    'Treinamento',
    'Vendido',
    'Outro',
  ];
  ngOnInit(): void {
    this.controle = this.service.controle
      ? this.service.controle
      : new ControleSaida();
  }

  submit() {
    if (this.controle.animal.referencia) {
      alert('Animais de referências não podem sair');
    } else {
      this.controle.ultimaEdicao = hoje();
      this.service.salvar(this.controle);
      if (
        this.controle.motivo == 'Doação' ||
        this.controle.motivo == 'Óbito' ||
        this.controle.motivo == 'Retorno' ||
        this.controle.motivo == 'Vendido'
      ) {
        this.controle.animal.referencia = true;
        this.animalService.salvar(this.controle.animal);
      }
    }
  }
}
