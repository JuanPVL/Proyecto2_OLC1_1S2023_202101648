import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { tipoAritmetica } from "../utils/TipoAritmetica";
export declare class Aritmetica extends Expression {
    private izquierdo;
    private derecho;
    private operador;
    constructor(izquierdo: Expression, derecho: Expression, operador: tipoAritmetica, linea: number, columna: number);
    execute(env: Environment): Return;
}
