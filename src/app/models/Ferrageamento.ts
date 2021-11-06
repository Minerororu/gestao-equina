import { Animal } from './Animal';
import { Responsavel } from './Responsavel';

export class Ferrageamento {
  animal: Animal;
  responsavel: Responsavel;
  data: string;
  descricao: string;
  anotacoes_materiais: string;
  ultimaEdicao: string;
  periodo: number;
  periodico: boolean;
}
