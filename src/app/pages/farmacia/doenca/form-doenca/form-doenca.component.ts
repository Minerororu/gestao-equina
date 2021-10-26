import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doenca } from 'src/app/models/Doenca';
import { DoencaService } from '../doenca.service';

@Component({
  selector: 'app-form-doenca',
  templateUrl: './form-doenca.component.html',
  styleUrls: ['./form-doenca.component.css']
})
export class FormDoencaComponent implements OnInit {
  doenca: Doenca;
  constructor(private service: DoencaService, private router: Router) { }

  ngOnInit(): void {
    this.doenca = this.service.doenca? this.service.doenca: new Doenca();
  }

  submit(){
    this.service.salvar(this.doenca);
    this.router.navigate(['list-doenca']);
  }
}
