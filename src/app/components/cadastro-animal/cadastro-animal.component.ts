import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { ANIMAIS_CL } from '../constants/constants';

@Component({
  selector: 'cadastro-animal',
  templateUrl: './cadastro-animal.component.html',
  styleUrls: ['./cadastro-animal.component.css'],
})
export class CadastroAnimalComponent implements OnInit {
  constructor() {}
  @Input() animal: Animal;

  animal_collection = ANIMAIS_CL;

  ngOnInit(): void {}
}
