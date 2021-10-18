import { Animal } from './Animal';

export class ControleReproducao {
  id: string;
  responsavel: string;
  macho: Animal;
  femea: Animal;
  data: string;
  metodoConcepcao: string;
  situacao: string;
  observacoes: string;
  comunicada: boolean;
  numeroCC: number;
  transferenciaEmbriao: {
    responsavel: string;
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
  responsavel: string;
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
