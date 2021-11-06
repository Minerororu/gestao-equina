import { Animal } from './Animal';
import { Responsavel } from './Responsavel';
import { Vacina } from './Vacina';

export class Vacinacao {
  animal: Animal;
  responsavel: Responsavel;
  data: string;
  vacina: Vacina;
  descricao: string;
  anotacoesMaterias: string;
  ultimaEdicao: string;
  bloquearEdicao: boolean;
}
