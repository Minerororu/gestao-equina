import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demonstrativo } from 'src/app/models/Demonstrativo';
import { DemonstrativoService } from '../demonstrativo.service';

@Component({
  selector: 'app-list-demonstrativo',
  templateUrl: './list-demonstrativo.component.html',
  styleUrls: ['./list-demonstrativo.component.css']
})
export class ListDemonstrativoComponent implements OnInit {
  demonstrativos: Demonstrativo[];

  constructor(private service: DemonstrativoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.demonstrativos = doc as Demonstrativo[];
    })
  }

  delete(demonstrativo: Demonstrativo){
    this.service.remover(demonstrativo);
    this.ngOnInit();
  }
  
  edit(demonstrativo: Demonstrativo){
    this.service.demonstrativo = demonstrativo;
    this.router.navigate(['form-demonstrativo']);
  }

  adicionar(){
    this.service.demonstrativo = new Demonstrativo();
    this.router.navigate(['form-demonstrativo']);
  }

  resumo(demonstrativo: Demonstrativo){
    this.service.demonstrativo = demonstrativo;
    this.router.navigate(['resumo-demonstrativo']);
  }
}