import { Animal } from './Animal';
import { CadastroProcedimento } from './CadastroProcedimento';
import { Responsavel } from './Responsavel';

export class ControleFolicular {
  id: string;
  dataInicio: string;
  responsavel: Responsavel;
  animal: Animal;
  observacoes: string;
  bloquearEdicao: boolean;
  ultimaEdicao: string;
  dadosControle: {
    responsavel: Responsavel;
    data: string;
    procedimento: CadastroProcedimento;
    descricao: string;
    ovarioDireito: string;
    ovarioEsquerdo: string;
    utero: string;
    observacoes: string;
  };
}
