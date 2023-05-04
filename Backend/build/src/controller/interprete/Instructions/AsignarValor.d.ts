import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
export declare class AsignarValor extends Instruction {
    private id;
    private value;
    constructor(id: string, value: Expression, linea: number, columna: number);
    execute(env: Environment): any;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
