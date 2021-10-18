import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentroCusto } from 'src/app/models/CentroCusto';
import { CentroCustoService } from '../centro-custo.service';

@Component({
  selector: 'app-list-centro-custo',
  templateUrl: './list-centro-custo.component.html',
  styleUrls: ['./list-centro-custo.component.css'],
})
export class ListCentroCustoComponent implements OnInit {
  centros: CentroCusto[] = [];
  grupos: CentroCusto[] = [];
  centroPorGrupo: number;
  constructor(private service: CentroCustoService, private router: Router) {}

  ngOnInit(): void {
    this.centros.sort((a, b) => {
      if (a.grupo > b.grupo) {
        return 1;
      } else {
        return -1;
      }
    });

    this.service.listar().then((doc) => {
      this.centros = doc as CentroCusto[];
    });
  }

  edit(centro: CentroCusto) {
    this.service.centroCusto = centro;
    this.router.navigate(['form-centro-custo']);
  }

  delete(centro: CentroCusto) {
    this.service.remover(centro);
    this.ngOnInit();
  }

  adicionar() {
    this.service.centroCusto = new CentroCusto();
    this.router.navigate(['form-centro-custo']);
  }
}
