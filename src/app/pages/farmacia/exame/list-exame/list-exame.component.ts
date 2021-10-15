import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exame } from 'src/app/models/Exame';
import { ExameService } from '../vacina.service';

@Component({
  selector: 'app-list-exame',
  templateUrl: './list-exame.component.html',
  styleUrls: ['./list-exame.component.css']
})
export class ListExameComponent implements OnInit {
  exames: Exame[]
  constructor(private service: ExameService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.exames = doc as Exame[]
    })
  }

  edit(exame: Exame){
    this.service.exame = exame;
    this.router.navigate(['form-exame'])
  }

  delete(exame: Exame){
    this.service.remover(exame);
    this.ngOnInit();
  }

  adicionar(){
    this.service.exame = new Exame();
    this.router.navigate(['form-exame'])
  }
}
