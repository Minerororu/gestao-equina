import { Animal } from './Animal';
import { Responsavel } from './Responsavel';

export class DoseSemen {
  id: string;
  responsavel: Responsavel;
  data: string;
  volumeEjaculado: number;
  coloracao: string;
  espermatica: string;
  concentracao: string;
  vigor: string;
  espermatozoidesTotais: number;
  diluenteUtilizado: string;
  diluicao: string;
  dosesDoDia: number;
  congelamento: boolean;
  tranporte: string;
  observacoes: string;
  dadosInseminacao: {
    egua: Animal;
    registroEgua: string;
    statusInseminacao: string;
    data: string;
    comunicada: boolean;
    numeroCC: number;
  };
  ultimaEdicao: string;
}
