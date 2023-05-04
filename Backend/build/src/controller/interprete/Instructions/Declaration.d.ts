import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { tipo } from "../abstract/Return";
export declare class Declaration extends Instruction {
    private id;
    private tipo;
    private value;
    constructor(id: string, tipo: tipo, value: Expression | null, linea: number, columna: number);
    execute(env: Environment): any;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
