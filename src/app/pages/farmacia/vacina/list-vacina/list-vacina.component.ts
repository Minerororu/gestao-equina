import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacina } from 'src/app/models/Vacina';
import { VacinaService } from '../vacina.service';

@Component({
  selector: 'app-list-vacina',
  templateUrl: './list-vacina.component.html',
  styleUrls: ['./list-vacina.component.css'],
})
export class ListVacinaComponent implements OnInit {
  vacinas: Vacina[];
  constructor(private service: VacinaService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().then((doc) => {
      this.vacinas = doc as Vacina[];
    });
  }

  edit(vacina: Vacina) {
    this.service.vacina = vacina;
    this.router.navigate(['form-vacina']);
  }

  delete(vacina: Vacina) {
    this.service.remover(vacina);
    this.ngOnInit();
  }

  adicionar() {
    this.service.vacina = new Vacina();
    this.router.navigate(['form-vacina']);
  }
}
