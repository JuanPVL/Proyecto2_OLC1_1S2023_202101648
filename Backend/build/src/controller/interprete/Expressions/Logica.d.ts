import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { tipoLogico } from "../utils/TipoLogico";
export declare class Logica extends Expression {
    private izquierdo;
    private derecho;
    private operador;
    constructor(izquierdo: Expression, derecho: Expression, operador: tipoLogico, linea: number, columna: number);
    execute(env: Environment): Return;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
