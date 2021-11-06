import { Animal } from './Animal';
import { Responsavel } from './Responsavel';
import { Vermifugo } from './Vermifugo';

export class Vermifugacao {
  id: string;
  data: string;
  vermifugo: Vermifugo
  animal: Animal;
  responsavel: Responsavel;
  anotacoesMateriais: string;
  bloquearEdicao: boolean;
  ultimaEdicao: string;
}
