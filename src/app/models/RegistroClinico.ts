import { Animal } from './Animal';
import { Doenca } from './Doenca';
import { Responsavel } from './Responsavel';

export class RegistroClinico {
  animal: Animal;
  responsavel: Responsavel;
  data: string;
  motivo: string;
  doenca: Doenca;
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
