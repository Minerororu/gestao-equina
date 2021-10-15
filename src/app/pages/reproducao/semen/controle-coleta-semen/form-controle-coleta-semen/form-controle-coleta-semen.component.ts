import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ANIMAIS_CL } from 'src/app/components/constants/constants';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { hoje, strToDate } from 'src/app/helpers/function';
import { ControleColetaSemen } from 'src/app/models/ControleColetaSemen';
import { DoseSemen } from 'src/app/models/DoseSemen';
import { ControleColetaSemenService } from '../controle-coleta-semen.service';

@Component({
  selector: 'app-form-controle-coleta-semen',
  templateUrl: './form-controle-coleta-semen.component.html',
  styleUrls: ['./form-controle-coleta-semen.component.css']
})
export class FormControleColetaSemenComponent implements OnInit {
  controle: ControleColetaSemen;  
  animal_collection = ANIMAIS_CL;
  constructor(private service: ControleColetaSemenService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.controle = this.service.controle? this.service.controle: new ControleColetaSemen();
    this.controle.dosesColetadas = this.controle.dosesColetadas ? this.controle.dosesColetadas : []
    this.controle.dosesConfirmadas = this.controle.dosesConfirmadas ? this.controle.dosesConfirmadas : 0

  }

  adicionarDose(){
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: { title: 'Formulário de Coleta de Sêmen', formularioSemen: true},
  });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.controle.dosesColetadas.push(result);
        result.dadosInseminacao.comunicada ? this.controle.dosesConfirmadas++ : '';
      }
    });
  }

  editarDose(dose: DoseSemen){
    let oldDose = JSON.parse(JSON.stringify(dose));
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: { title: 'Formulário de Coleta de Sêmen', formularioSemen: true, dose: dose},
    });
    dialogRef.afterClosed().subscribe(result => {
      let doseIndex = this.controle.dosesColetadas.indexOf(dose);
      if(result){
        this.controle.dosesColetadas.splice(doseIndex, 1, result);
        result.dadosInseminacao.comunicada ? this.controle.dosesConfirmadas++ : '';
        oldDose.dadosInseminacao.comunicada && !result.dadosInseminacao.comunicada ? this.controle.dosesConfirmadas-- : '';
      }
    });
  }

  deletarDose(dose: DoseSemen){
    let doseIndex = this.controle.dosesColetadas.indexOf(dose);
    dose.dadosInseminacao.comunicada? this.controle.dosesConfirmadas-- : '';
    this.controle.dosesColetadas.splice(doseIndex, 1,);
  }

  submit(){
    let dataLimite = strToDate(this.controle.dataLimite)
    let hojeDate = strToDate(hoje())
    if(dataLimite <= hojeDate){
      alert('A data limite foi atingida')
    }else{
      this.service.salvar(this.controle);
      this.router.navigate(['list-controle-coleta-semen']);
    }
  }
}
