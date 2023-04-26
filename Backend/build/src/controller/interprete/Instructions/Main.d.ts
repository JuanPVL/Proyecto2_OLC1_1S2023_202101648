import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { LlamadaFuncion } from "../Expressions/LlamadaFuncion";
export declare class InsMain extends Instruction {
    funcion: LlamadaFuncion;
    constructor(funcion: LlamadaFuncion, linea: number, columna: number);
    execute(env: Environment): void;
}
