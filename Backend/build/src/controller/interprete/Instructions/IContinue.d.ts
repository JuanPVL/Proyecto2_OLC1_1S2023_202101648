import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";
export declare class IContinue extends Instruction {
    constructor(line: number, column: number);
    execute(env: Environment): this;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
