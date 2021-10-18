import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-resumo-animal',
  templateUrl: './resumo-animal.component.html',
  styleUrls: ['./resumo-animal.component.css'],
})
export class ResumoAnimalComponent implements OnInit {
  animal: Animal;
  constructor(private service: AnimalService) {}

  ngOnInit(): void {
    this.animal = this.service.animal;
  }
}
