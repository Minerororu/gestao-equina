import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacina } from 'src/app/models/Vacina';
import { VacinaService } from '../vacina.service';

@Component({
  selector: 'app-form-vacina',
  templateUrl: './form-vacina.component.html',
  styleUrls: ['./form-vacina.component.css']
})
export class FormVacinaComponent implements OnInit {
  vacina: Vacina;
  constructor(private service: VacinaService, private router: Router) { }

  ngOnInit(): void {
    this.vacina = this.service.vacina ? this.service.vacina : new Vacina()
  }

  submit(){
    this.service.salvar(this.vacina);
    this.router.navigate(['list-vacina']);
  }
}
