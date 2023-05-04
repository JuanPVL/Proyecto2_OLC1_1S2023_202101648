import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
export declare class InWhile extends Instruction {
    private condition;
    private statement;
    constructor(condition: Expression, statement: Instruction, line: number, column: number);
    execute(env: Environment): any;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
