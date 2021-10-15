import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vermifugo } from 'src/app/models/Vermifugo';
import { VermifugoService } from '../vermifugo.service';

@Component({
  selector: 'app-form-vermifugo',
  templateUrl: './form-vermifugo.component.html',
  styleUrls: ['./form-vermifugo.component.css']
})
export class FormVermifugoComponent implements OnInit {
  vermifugo: Vermifugo
  constructor(private service: VermifugoService, private router: Router) { }

  ngOnInit(): void {
    this.vermifugo = this.service.vermifugo ? this.service.vermifugo: new Vermifugo()
  }

  submit(){
    this.service.salvar(this.vermifugo);
    this.router.navigate(['list-vermifugo'])
  }
}
