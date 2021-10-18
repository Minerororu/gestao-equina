import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsoProcedimento } from 'src/app/models/UsoProcedimento';
import { UsoProcedimentoService } from '../uso-procedimento.service';

@Component({
  selector: 'app-list-uso-procedimento',
  templateUrl: './list-uso-procedimento.component.html',
  styleUrls: ['./list-uso-procedimento.component.css'],
})
export class ListUsoProcedimentoComponent implements OnInit {
  procedimentos: UsoProcedimento[];
  constructor(
    private service: UsoProcedimentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.listar().then((doc) => {
      this.procedimentos = doc as UsoProcedimento[];
    });
  }

  edit(procedimento: UsoProcedimento) {
    this.service.procedimento = procedimento;
    this.router.navigate(['form-uso-procedimento']);
  }

  delete(procedimento: UsoProcedimento) {
    this.service.remover(procedimento);
    this.ngOnInit();
  }

  adicionar() {
    this.service.procedimento = new UsoProcedimento();
    this.router.navigate(['form-uso-procedimento']);
  }
}
