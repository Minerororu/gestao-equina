import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroClinico } from 'src/app/models/RegistroClinico';
import { RegistroClinicoService } from '../registro-clinico.service';

@Component({
  selector: 'app-list-registro-clinico',
  templateUrl: './list-registro-clinico.component.html',
  styleUrls: ['./list-registro-clinico.component.css'],
})
export class ListRegistroClinicoComponent implements OnInit {
  registros: RegistroClinico[];
  constructor(
    private service: RegistroClinicoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.listar().then((doc) => {
      this.registros = doc as RegistroClinico[];
    });
  }

  adicionar() {
    this.service.registroClinico = new RegistroClinico();
    this.router.navigate(['form-registro']);
  }

  delete(registro: RegistroClinico) {
    this.service.remover(registro);
    this.ngOnInit();
  }

  edit(registro: RegistroClinico) {
    this.service.registroClinico = registro;
    this.router.navigate(['form-registro']);
  }
}
