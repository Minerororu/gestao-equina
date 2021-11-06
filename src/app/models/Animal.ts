import { Responsavel } from "./Responsavel";

export class Animal {
  id: string;
  nome: string;
  dataNascimento: string;
  dataEntrada: string;
  sexo: string;
  pai: Animal;
  mae: Animal;
  receptora: Animal;
  filhos: string[];
  criador: string;
  proprietario: string;
  controlCriador: string;
  categoria: string;
  temperamento: string;
  pelagem: string;
  referencia: boolean;
  vivo: boolean;
  observacoes: string;
  nacionalidade: string;
  exameDna: {
    dataColeta: string;
    responsavel: Responsavel;
    ordem: string;
    resenha: any; //documento;
  };
  registroAssociacao: {
    tipo: string;
    numero: number;
    livro: string;
    numeroChip: number;
    registro: any; // documento;
    grauPureza: number;
  };
  classificacao: string;
  metodoConcepcao: string;
  transferenciaEmbriao: boolean;
  dataDesmame: string;
  segurado: boolean;
  seguroValidade: string;
  passaporte: number;
  passaporteValidade: string;
  aVenda: string;
  descricaoNegocio: string;
  preco: number;
  parcelas: number;
  ultimaEdicao: string;
  idade: number;
}
