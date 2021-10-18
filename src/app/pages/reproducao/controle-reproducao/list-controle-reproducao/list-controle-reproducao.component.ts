import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleReproducao } from 'src/app/models/ControleReproducao';
import { ControleReproducaoService } from '../controle-controle-reproducao.service';

@Component({
  selector: 'app-list-controle-reproducao',
  templateUrl: './list-controle-reproducao.component.html',
  styleUrls: ['./list-controle-reproducao.component.css'],
})
export class ListControleReproducaoComponent implements OnInit {
  controles: ControleReproducao[];
  controlesFiltrados: ControleReproducao[];
  filtrado: any = false;
  constructor(
    private service: ControleReproducaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.listar().then((doc) => {
      this.controles = doc as ControleReproducao[];
      this.controlesFiltrados = this.controles;
    });
  }

  edit(controle: ControleReproducao) {
    this.service.controle = controle;
    this.router.navigate(['form-controle-reproducao']);
  }

  delete(controle: ControleReproducao) {
    this.service.remover(controle);
    this.ngOnInit();
  }

  adicionar() {
    this.service.controle = new ControleReproducao();
    this.router.navigate(['form-controle-reproducao']);
  }

  filtrar() {
    if (!this.filtrado) {
      this.controlesFiltrados = this.controles.filter((controle) => {
        return !controle.comunicada;
      });
    } else {
      this.controlesFiltrados = this.controles;
    }
  }
}
