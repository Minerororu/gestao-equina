import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroProcedimento } from 'src/app/models/CadastroProcedimento';
import { CadastroProcedimentoService } from '../cadastro-procedimento.service';

@Component({
  selector: 'app-list-cadastro-procedimento',
  templateUrl: './list-cadastro-procedimento.component.html',
  styleUrls: ['./list-cadastro-procedimento.component.css']
})
export class ListCadastroProcedimentoComponent implements OnInit {
  procedimentos: CadastroProcedimento[]
  constructor(private service: CadastroProcedimentoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.procedimentos = (doc as CadastroProcedimento[]).sort((a, b) => {
        if(a.grupo >= b.grupo){
          return 1
        }else{return -1}
      })
    })
  }

  edit(procedimento: CadastroProcedimento){
    this.service.procedimento = procedimento;
    this.router.navigate(['form-cadastro-procedimento']);
  }

  delete(procedimento: CadastroProcedimento){
    this.service.remover(procedimento);
    this.ngOnInit();
  }

  adicionar(){
    this.service.procedimento = new CadastroProcedimento();
    this.router.navigate(['form-cadastro-procedimento']);
  }
}
