import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exame } from 'src/app/models/Exame';
import { ExameService } from '../vacina.service';

@Component({
  selector: 'app-form-exame',
  templateUrl: './form-exame.component.html',
  styleUrls: ['./form-exame.component.css'],
})
export class FormExameComponent implements OnInit {
  exame: Exame;
  constructor(private service: ExameService, private router: Router) {}

  ngOnInit(): void {
    this.exame = this.service.exame ? this.service.exame : new Exame();
  }

  submit() {
    this.service.salvar(this.exame);
    this.router.navigate(['list-exame']);
  }
}
