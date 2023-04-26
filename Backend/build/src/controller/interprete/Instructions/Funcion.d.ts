import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { tipo } from "../abstract/Return";
export declare class Funcion extends Instruction {
    private tipo;
    private id;
    parametros: Array<Expression>;
    statement: Instruction;
    constructor(tipo: tipo, id: string, parametros: Array<Expression>, statement: Instruction, line: number, column: number);
    execute(env: Environment): void;
}
