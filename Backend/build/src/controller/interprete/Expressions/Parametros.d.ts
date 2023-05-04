import { Expression } from "../abstract/Expression";
import { Return, tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
export declare class Parametros extends Expression {
    private tipo;
    private id;
    constructor(tipo: tipo, id: string, line: number, column: number);
    execute(env: Environment): Return;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
