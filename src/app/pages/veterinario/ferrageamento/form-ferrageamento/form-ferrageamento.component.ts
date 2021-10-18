import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMAIS_CL } from 'src/app/components/constants/constants';
import { hoje } from 'src/app/helpers/function';
import { Ferrageamento } from 'src/app/models/Ferrageamento';
import { FerrageamentoService } from '../ferrageamento.service';

@Component({
  selector: 'app-form-ferrageamento',
  templateUrl: './form-ferrageamento.component.html',
  styleUrls: ['./form-ferrageamento.component.css'],
})
export class FormFerrageamentoComponent implements OnInit {
  ferrageamento: Ferrageamento;
  animal_collection = ANIMAIS_CL;
  constructor(private service: FerrageamentoService, private router: Router) {}

  ngOnInit(): void {
    this.ferrageamento = this.service.ferrageamento
      ? this.service.ferrageamento
      : new Ferrageamento();
  }

  submit() {
    this.ferrageamento.ultimaEdicao = hoje();
    this.service.salvar(this.ferrageamento);
    this.router.navigate(['list-ferrageamento']);
  }
}
