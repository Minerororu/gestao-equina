import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CentroCusto } from 'src/app/models/CentroCusto';
import { Parto } from 'src/app/models/ControleReproducao';
import { DoseSemen } from 'src/app/models/DoseSemen';
import { GrupoFinanceiro } from 'src/app/models/GrupoFinanceiro';
import {
  ANIMAIS_CL,
  CENTRO_CUSTO_CL,
  GRUPO_CENTRO_CL,
} from '../constants/constants';

@Component({
  selector: 'modal-component',
  templateUrl: 'modal.component.html',
})
export class ModalComponent implements OnInit {
  parto: Parto;
  dose: DoseSemen;
  isInvalid = true;
  centroCusto: CentroCusto;
  grupoFinanceiro: GrupoFinanceiro;
  animal_collection = ANIMAIS_CL;
  centro_de_custo_collection = CENTRO_CUSTO_CL;
  grupo_financeiro_collection = GRUPO_CENTRO_CL;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.parto = this.data.parto ? this.data.parto : new Parto();
    this.data.metodoConcepcao
      ? (this.parto.metodoConcepcao = this.data.metodoConcepcao)
      : '';
    this.dose = this.data.dose ? this.data.dose : new DoseSemen();
    this.dose.dadosInseminacao
      ? ''
      : (this.dose.dadosInseminacao = {
          egua: null,
          registroEgua: null,
          statusInseminacao: null,
          data: null,
          comunicada: null,
          numeroCC: null,
        });
    this.centroCusto = new CentroCusto();
    this.grupoFinanceiro = new GrupoFinanceiro();
  }
}
