import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Responsavel } from 'src/app/models/Responsavel';
import { ResponsavelService } from '../responsavel.service';

@Component({
  selector: 'app-list-responsavel',
  templateUrl: './list-responsavel.component.html',
  styleUrls: ['./list-responsavel.component.css']
})
export class ListResponsavelComponent implements OnInit {
  responsaveis: Responsavel[]
  constructor(private service: ResponsavelService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.responsaveis = doc as Responsavel[]
    })
  }

  edit(responsavel: Responsavel){
    this.service.responsavel = responsavel
    this.router.navigate(['form-responsavel'])
  }

  delete(responsavel: Responsavel){
    this.service.remover(responsavel);
    this.ngOnInit();
  }

  adicionar(){
    this.service.responsavel = new Responsavel();
    this.router.navigate(['form-responsavel'])
  }
}
