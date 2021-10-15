import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { DatabaseService } from 'src/app/helpers/database.service';
import { hoje } from 'src/app/helpers/function';
import { CentroCusto } from 'src/app/models/CentroCusto';
import { Demonstrativo } from 'src/app/models/Demonstrativo';
import { DemonstrativoService } from '../demonstrativo.service';

@Component({
  selector: 'app-form-demonstrativo',
  templateUrl: './form-demonstrativo.component.html',
  styleUrls: ['./form-demonstrativo.component.css']
})
export class FormDemonstrativoComponent implements OnInit {
  demonstrativo: Demonstrativo;
  constructor(private service: DemonstrativoService, private router: Router, private dialog: MatDialog, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.demonstrativo = this.service.demonstrativo? this.service.demonstrativo: new Demonstrativo(), this.demonstrativo.centrosDeCustos = [];
    if(this.service.demonstrativo){
      this.db.collection('demonstrativos').doc(this.demonstrativo.id).ref.get().then(doc => {
        this.demonstrativo = doc.data() as Demonstrativo;
      });
    }
  };

  
  adicionarCentro(){
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: { title: 'Formulário de Centro de Custo', formularioCentroCusto: true},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.demonstrativo.centrosDeCustos.push(result);
      }
    });
  }

  adicionarGrupo(){
    this.demonstrativo.grupos ? '':this.demonstrativo.grupos = [];
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: { title: 'Formulário de Centro de Custo', formularioGrupoFinanceiro: true},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.demonstrativo.grupos.push(result);
      }
    });
  }
  
  deleteCentro(centro: CentroCusto){
    let centroIndex = this.demonstrativo.centrosDeCustos.indexOf(centro);
    this.demonstrativo.centrosDeCustos.splice(centroIndex, 1,);
  }

  deleteGrupo(grupo){
    let grupoIndex = this.demonstrativo.grupos.indexOf(grupo);
    this.demonstrativo.grupos.splice(grupoIndex, 1);
  }

  submit(){
    if(this.demonstrativo.componentes == 'Centro Financeiro'){
      this.demonstrativo.grupos = [];
    }else if(this.demonstrativo.componentes == 'Grupos de Centros'){
      this.demonstrativo.centrosDeCustos = [];
    }
    this.demonstrativo.id = this.service.demonstrativo.id;
    this.demonstrativo.ultimaEdicao = hoje();
    this.service.salvar(this.demonstrativo);
    this.router.navigate(['list-demonstrativo']);
  }
}
