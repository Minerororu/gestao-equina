import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMAIS_CL } from 'src/app/components/constants/constants';
import { hoje } from 'src/app/helpers/function';
import { RegistroClinico } from 'src/app/models/RegistroClinico';
import { RegistroClinicoService } from '../registro-clinico.service';

@Component({
  selector: 'app-form-registro-clinico',
  templateUrl: './form-registro-clinico.component.html',
  styleUrls: ['./form-registro-clinico.component.css'],
})
export class FormRegistroClinicoComponent implements OnInit {
  registro: RegistroClinico;
  animal_collection = ANIMAIS_CL;
  doencas = [
    'Anemia Infecciosa',
    'Arterite Viral Equina',
    'Diarreia',
    'Durina',
    'Encefalomielite',
    'Influenza Equina',
    'Metrite Contagiosa Equina',
    'Mormo',
    'Peste Equina',
    'Piroplasmose',
    'Raquitismo',
    'Rinopneumonite',
    'Sarnas - acarioses',
    'Surra(Trypanosoma evansi)',
    'Verminoses - helmintíases',
  ];
  situacoes = ['Em Tratamento', 'Concluido', 'Interrompido', 'Cancelado'];
  constructor(
    private service: RegistroClinicoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registro = this.service.registroClinico
      ? this.service.registroClinico
      : new RegistroClinico();
  }

  submit() {
    this.registro.ultimaEdicao = hoje();
    this.service.salvar(this.registro);
    this.router.navigate(['list-registro']);
  }
}
