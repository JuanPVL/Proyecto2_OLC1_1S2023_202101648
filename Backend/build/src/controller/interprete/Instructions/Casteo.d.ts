import { Instruction } from "../abstract/Instruction";
import { tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
export declare class Casteo extends Instruction {
    private tipo;
    private value;
    constructor(tipo: tipo, value: Expression, line: number, column: number);
    execute(env: Environment): {
        value: number;
        type: tipo.INT;
    } | {
        value: number;
        type: tipo.DOUBLE;
    } | {
        value: string;
        type: tipo.CHAR;
    } | undefined;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
