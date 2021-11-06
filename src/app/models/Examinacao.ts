import { Animal } from './Animal';
import { Responsavel } from './Responsavel';

export class Examinacao {
  animal: Animal;
  responsavel: Responsavel;
  data: string;
  exame: string;
  dataColeta: string;
  dataValidade: string;
  dataResultado: string;
  resultado: string;
  laboratorio: string;
  bloquearEdicao: boolean;
  ultimaEdicao: string;
}
