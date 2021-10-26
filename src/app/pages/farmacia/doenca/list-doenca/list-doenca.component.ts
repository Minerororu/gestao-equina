import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doenca } from 'src/app/models/Doenca';
import { DoencaService } from '../doenca.service';

@Component({
  selector: 'app-list-doenca',
  templateUrl: './list-doenca.component.html',
  styleUrls: ['./list-doenca.component.css']
})
export class ListDoencaComponent implements OnInit {
  doencas: Doenca[]
  constructor(private service: DoencaService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.doencas = doc as Doenca[];
    })
  }

  edit(doenca: Doenca){
    this.service.doenca = doenca;
    this.router.navigate(['form-doenca'])
  }

  delete(doenca: Doenca){
    this.service.remover(doenca);
    this.ngOnInit();
  }

  adicionar(){
    this.service.doenca = new Doenca();
    this.router.navigate(['form-doenca'])
  }
}
