import { Expression } from "../abstract/Expression";
import { tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";
export declare class EReturn extends Instruction {
    private value;
    constructor(value: Expression, line: number, column: number);
    execute(env: Environment): this | {
        value: any;
        type: tipo;
        tipo: tipo;
    };
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
