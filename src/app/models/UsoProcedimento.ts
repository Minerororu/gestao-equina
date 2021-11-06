import { Animal } from './Animal';
import { CadastroProcedimento } from './CadastroProcedimento';
import { Responsavel } from './Responsavel';

export class UsoProcedimento {
  id: string;
  categoria: string;
  animal: Animal;
  responsavel: Responsavel;
  data: string;
  procedimento: CadastroProcedimento;
  descricao: string;
  anotacoes_materiais: string;
  ultimaEdicao: string;
}
