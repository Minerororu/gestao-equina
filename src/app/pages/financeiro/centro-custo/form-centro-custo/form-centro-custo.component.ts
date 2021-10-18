import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GRUPO_CENTRO_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { CentroCusto } from 'src/app/models/CentroCusto';
import { GrupoFinanceiro } from 'src/app/models/GrupoFinanceiro';
import { CentroCustoService } from '../centro-custo.service';

@Component({
  selector: 'app-form-centro-custo',
  templateUrl: './form-centro-custo.component.html',
  styleUrls: ['./form-centro-custo.component.css'],
})
export class FormCentroCustoComponent implements OnInit {
  centro: CentroCusto;
  grupo_collection = GRUPO_CENTRO_CL;
  constructor(
    private service: CentroCustoService,
    private router: Router,
    private db: DatabaseService
  ) {}

  ngOnInit(): void {
    if (this.service.centroCusto) {
      this.centro = this.service.centroCusto;
      this.centro.grupo = this.service.centroCusto?.grupo;
    } else {
      this.centro = new CentroCusto();
      this.centro.grupo = new GrupoFinanceiro();
    }
  }

  submit() {
    this.service.salvar(this.centro);
    this.db.list(GRUPO_CENTRO_CL + '', '').then((doc) => {
      if (!doc.includes(this.centro.grupo.nome)) {
        this.db.save(GRUPO_CENTRO_CL + '', this.centro.grupo);
      }
    });
    this.router.navigate(['list-centro-custo']);
  }
}
