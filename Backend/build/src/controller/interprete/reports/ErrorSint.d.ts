import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";
export declare class ErrorSinta extends Instruction {
    error: string;
    constructor(error: string, line: number, column: number);
    execute(env: Environment): void;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
