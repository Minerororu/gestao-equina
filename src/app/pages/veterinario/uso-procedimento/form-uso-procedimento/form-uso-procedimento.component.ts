import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMAIS_CL, CADASTRO_PROCEDIMENTO_CL } from 'src/app/components/constants/constants';
import { UsoProcedimento } from 'src/app/models/UsoProcedimento';
import { UsoProcedimentoService } from '../uso-procedimento.service';

@Component({
  selector: 'app-form-uso-procedimento',
  templateUrl: './form-uso-procedimento.component.html',
  styleUrls: ['./form-uso-procedimento.component.css']
})
export class FormUsoProcedimentoComponent implements OnInit {
  procedimento: UsoProcedimento;
  animal_collection = ANIMAIS_CL;
  cadastro_procedimento_collection = CADASTRO_PROCEDIMENTO_CL;
  constructor(private service: UsoProcedimentoService, private router: Router) { }

  ngOnInit(): void {
    this.procedimento = this.service.procedimento? this.service.procedimento: new UsoProcedimento();
  }

  submit(){
    this.service.salvar(this.procedimento);
    this.router.navigate(['list-uso-procedimento']);
  }
}
