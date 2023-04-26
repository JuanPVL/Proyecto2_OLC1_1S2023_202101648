import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
export declare class Print extends Instruction {
    private expression;
    constructor(line: number, column: number, expression: Expression);
    execute(env: Environment): void;
}
