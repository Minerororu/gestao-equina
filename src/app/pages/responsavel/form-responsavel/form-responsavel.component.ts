import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Responsavel } from 'src/app/models/Responsavel';
import { ResponsavelService } from '../responsavel.service';

@Component({
  selector: 'app-form-responsavel',
  templateUrl: './form-responsavel.component.html',
  styleUrls: ['./form-responsavel.component.css']
})
export class FormResponsavelComponent implements OnInit {
  responsavel: Responsavel;

  constructor(private service: ResponsavelService, private router: Router) { }

  ngOnInit(): void {
    this.responsavel = this.service.responsavel ? this.service.responsavel : new Responsavel();
    this.responsavel.ativo == undefined ? this.responsavel.ativo = true: '';
  }

  submit(){
    this.service.salvar(this.responsavel);
    this.router.navigate(['list-responsavel'])
  }
}
