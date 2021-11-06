import { Animal } from './Animal';
import { Responsavel } from './Responsavel';

export class ControleReproducao {
  id: string;
  responsavel: Responsavel;
  macho: Animal;
  femea: Animal;
  data: string;
  metodoConcepcao: string;
  situacao: string;
  observacoes: string;
  comunicada: boolean;
  numeroCC: number;
  transferenciaEmbriao: {
    responsavel: Responsavel;
    receptora: Animal;
    data: string;
    estado: string;
    anotacoes: string;
  };
  partos: Parto[];
  bloquearEdicao: boolean;
  ultimaEdicao: string;
}

export class Parto {
  id: string;
  responsavel: Responsavel;
  metodoConcepcao: string;
  transferenciaEmbriao: boolean;
  data: string;
  parto: string;
  natimorto: boolean;
  sexo: string;
  nome: string;
  comunicada: boolean;
  numControleCriador: string;
  pelagem: string;
  anotacoes: string;
}
