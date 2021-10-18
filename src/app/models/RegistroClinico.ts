import { Animal } from './Animal';

export class RegistroClinico {
  animal: Animal;
  responsavel: string;
  data: string;
  motivo: string;
  doenca: string;
  situacao: string;
  anamnese: string;
  exameClinico: string;
  diagnostico: string;
  prescricao_tratamento: string;
  materiaisUtilizados: string;
  conclusao_evolucao: string;
  bloquearEdicao: boolean;
  ultimaEdicao: string;
}
