import { Animal } from "./Animal";
import { CentroCusto } from "./CentroCusto";
import { ContaFinanceira } from "./ContaFinanceira";

export class Lancamento{
    id: string;
    operacao: string;
    data: string;
    docNum: number;
    descricao: string;
    centroDeCusto: CentroCusto;
    contaFinanceira: ContaFinanceira;
    pagamento_recebimento: string;
    valorDocumento: number;
    repetir: string;
    quantidadeRepeticao: number;
    pagamentoEfetuado: boolean;
    pagamentosEfetuados: number;    
    filho: boolean;
    animal: Animal;
    valoresPorMeses : number[];
}