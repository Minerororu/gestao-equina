import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroProcedimento } from 'src/app/models/CadastroProcedimento';
import { CadastroProcedimentoService } from '../cadastro-procedimento.service';

@Component({
  selector: 'app-form-cadastro-procedimento',
  templateUrl: './form-cadastro-procedimento.component.html',
  styleUrls: ['./form-cadastro-procedimento.component.css']
})
export class FormCadastroProcedimentoComponent implements OnInit {
  procedimento: CadastroProcedimento;
  constructor(private service: CadastroProcedimentoService, private router: Router) { }
  
  ngOnInit(): void {
    this.procedimento = this.service.procedimento ? this.service.procedimento : new CadastroProcedimento()
  }

  submit(){
    this.service.salvar(this.procedimento);
    this.router.navigate(['list-cadastro-procedimento']);
  }
}
