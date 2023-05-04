import { Instruction } from "../abstract/Instruction";
export declare class ErrorLexico extends Instruction {
    error: string;
    constructor(error: string, line: number, column: number);
    execute(): void;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
