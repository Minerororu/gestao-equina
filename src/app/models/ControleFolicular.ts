import { Animal } from "./Animal";
import { CadastroProcedimento } from "./CadastroProcedimento";

export class ControleFolicular{
    id: string;
    dataInicio: string;
    responsavel: string;
    animal: Animal;
    observacoes: string;
    bloquearEdicao: boolean;
    ultimaEdicao: string;
    dadosControle: {
        responsavel: string;
        data: string;
        procedimento: CadastroProcedimento;
        descricao: string;
        ovarioDireito: string;
        ovarioEsquerdo: string;
        utero: string;
        observacoes: string;
    }
}