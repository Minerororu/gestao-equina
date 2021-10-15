import { CentroCusto } from "./CentroCusto";

export class Demonstrativo {
    id: string;
    componentes: string;
    titulo: string;
    descricao: string;
    centrosDeCustos: CentroCusto[];
    grupos: any[];
    ultimaEdicao: string;
}