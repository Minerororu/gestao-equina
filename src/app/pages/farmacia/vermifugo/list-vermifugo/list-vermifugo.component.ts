import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vermifugo } from 'src/app/models/Vermifugo';
import { VermifugoService } from '../vermifugo.service';

@Component({
  selector: 'app-list-vermifugo',
  templateUrl: './list-vermifugo.component.html',
  styleUrls: ['./list-vermifugo.component.css']
})
export class ListVermifugoComponent implements OnInit {
  vermifugos: Vermifugo[]
  constructor(private service: VermifugoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().then(doc => {
      this.vermifugos = doc as Vermifugo[]
    })
  }

  edit(vermifugo: Vermifugo){
    this.service.vermifugo = vermifugo;
    this.router.navigate(['form-exame'])
  }

  delete(vermifugo: Vermifugo){
    this.service.remover(vermifugo);
    this.ngOnInit();
  }

  adicionar(){
    this.service.vermifugo = new Vermifugo();
    this.router.navigate(['form-vermifugo'])
  }
}
