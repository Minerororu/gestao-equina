import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMAIS_CL } from 'src/app/components/constants/constants';
import { DatabaseService } from 'src/app/helpers/database.service';
import { Animal } from 'src/app/models/Animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  animal: Animal;
  constructor(private db: DatabaseService, private router: Router) {}

  salvar<T>(animal: Animal, oldValue?: Animal) {
    return this.db
      .save<T>(ANIMAIS_CL + '', animal, oldValue)
  }

  atualizar(id: string, valor: Animal) {
    return this.db.update(ANIMAIS_CL + '', id + '', { ...valor });
  }

  listar<T>() {
    return this.db.list<T>(ANIMAIS_CL + '', '');
  }

  remover(animal: Animal) {
    return this.db.delete(ANIMAIS_CL + '', animal);
  }
}
