import { Animal } from "./Animal";
import { CadastroProcedimento } from "./CadastroProcedimento";

export class UsoProcedimento {
    id: string;
    categoria: string;
    animal: Animal;
    responsavel: string;
    data: string;
    procedimento: CadastroProcedimento;
    descricao: string;
    anotacoes_materiais: string;
    ultimaEdicao: string;
}