import { Component, OnInit } from '@angular/core';
import { DadosBiometricos } from 'src/app/models/DadosBiometricos';
import { DadosBiometricosService } from '../dados-biometricos.service';

@Component({
  selector: 'app-resumo-dados-biometricos',
  templateUrl: './resumo-dados-biometricos.component.html',
  styleUrls: ['./resumo-dados-biometricos.component.css']
})
export class ResumoDadosBiometricosComponent implements OnInit {
  dado : DadosBiometricos
  constructor(private service: DadosBiometricosService) { }

  ngOnInit(): void {
    this.dado = this.service.dado
  }

}
