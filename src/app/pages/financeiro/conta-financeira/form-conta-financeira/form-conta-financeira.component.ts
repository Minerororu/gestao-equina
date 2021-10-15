import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CENTRO_CUSTO_CL } from 'src/app/components/constants/constants';
import { ContaFinanceira } from 'src/app/models/ContaFinanceira';
import { ContaFinanceiraService } from '../conta-financeira.service';

@Component({
  selector: 'app-form-conta-financeira',
  templateUrl: './form-conta-financeira.component.html',
  styleUrls: ['./form-conta-financeira.component.css']
})
export class FormContaFinanceiraComponent implements OnInit {
  contaFinanceira: ContaFinanceira;
  centro_de_custo_collection = CENTRO_CUSTO_CL;
  constructor(private service: ContaFinanceiraService, private router: Router) { }

  ngOnInit(): void {
    this.contaFinanceira = this.service.contaFinanceira? this.service.contaFinanceira: new ContaFinanceira();
  }

  submit(){
    this.service.salvar(this.contaFinanceira);
    this.router.navigate(['list-conta-financeira']);
  }
}
