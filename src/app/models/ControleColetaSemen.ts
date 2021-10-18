import { Animal } from './Animal';
import { DoseSemen } from './DoseSemen';

export class ControleColetaSemen {
  animal: Animal;
  destinatario: string;
  data: string;
  numeroDoses: number;
  dosesConfirmadas: number;
  dataLimite: string;
  observacoes: string;
  ultimaEdicao: string;
  dosesColetadas: DoseSemen[];
}
