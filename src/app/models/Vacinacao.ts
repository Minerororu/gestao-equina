import { Animal } from './Animal';
import { Vacina } from './Vacina';

export class Vacinacao {
  animal: Animal;
  responsavel: string;
  data: string;
  vacina: Vacina;
  descricao: string;
  anotacoesMaterias: string;
  ultimaEdicao: string;
  bloquearEdicao: boolean;
}
