import { Animal } from "./Animal";

export class Examinacao {
    animal: Animal
    responsavel: string;
    data: string;
    exame: string;
    dataColeta: string;
    dataValidade: string;
    dataResultado: string;
    resultado: string;
    laboratorio: string;
    bloquearEdicao: boolean;
    ultimaEdicao: string
}