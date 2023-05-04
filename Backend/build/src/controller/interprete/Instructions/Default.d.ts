import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";
export declare class Default extends Instruction {
    constructor(linea: number, columna: number);
    execute(env: Environment): this;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
