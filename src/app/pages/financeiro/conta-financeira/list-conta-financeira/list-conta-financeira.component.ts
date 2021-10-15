import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContaFinanceira } from 'src/app/models/ContaFinanceira';
import { ContaFinanceiraService } from '../conta-financeira.service';

@Component({
  selector: 'app-list-conta-financeira',
  templateUrl: './list-conta-financeira.component.html',
  styleUrls: ['./list-conta-financeira.component.css']
})
export class ListContaFinanceiraComponent implements OnInit {
  contaFinanceiras: ContaFinanceira[]
  constructor(private service: ContaFinanceiraService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.contaFinanceiras = doc as ContaFinanceira[]
    })
  }

  edit(contaFinanceira: ContaFinanceira){
    this.service.contaFinanceira = contaFinanceira;
    this.router.navigate(['form-conta-financeira']);
  }

  delete(contaFinanceira: ContaFinanceira){
    this.service.remover(contaFinanceira);
    this.ngOnInit();
  }

  adicionar(){
    this.service.contaFinanceira = new ContaFinanceira();
    this.router.navigate(['form-conta-financeira'])
  }
}
