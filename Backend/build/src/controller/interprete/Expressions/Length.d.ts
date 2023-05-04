import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return } from "../abstract/Return";
export declare class Length extends Expression {
    private expresion;
    constructor(expresion: Expression, line: number, column: number);
    execute(env: Environment): Return;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
