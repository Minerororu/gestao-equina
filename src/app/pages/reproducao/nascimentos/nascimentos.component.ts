import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parto } from 'src/app/models/ControleReproducao';
import { NascimentoService } from './nascimentos.service';

@Component({
  selector: 'app-nascimentos',
  templateUrl: './nascimentos.component.html',
  styleUrls: ['./nascimentos.component.css']
})
export class NascimentosComponent implements OnInit {
  nascimentos: Parto[]
  nascimentosFiltrados: Parto[];
  filtrado: boolean;
  constructor(private service: NascimentoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.nascimentos = doc as Parto[]
      this.nascimentosFiltrados = this.nascimentos
    })
  }

  delete(nascimento: Parto){
    this.service.remover(nascimento);
    this.ngOnInit();
  }

  filtrar(){
    if(!this.filtrado){
      this.nascimentosFiltrados = this.nascimentos.filter(parto => {
        return parto.comunicada != true;
      })
    }else{
      this.nascimentosFiltrados = this.nascimentos;
    }
  }
}
