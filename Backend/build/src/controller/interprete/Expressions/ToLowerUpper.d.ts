import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return } from "../abstract/Return";
export declare class ToLowerUpper extends Expression {
    private tipo;
    private expresion;
    constructor(tipo: number, expresion: Expression, line: number, column: number);
    execute(env: Environment): Return;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
