import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
export declare class Acceso extends Expression {
    id: string;
    constructor(id: string, linea: number, columna: number);
    execute(env: Environment): Return;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
