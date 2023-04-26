import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { tipoRelacional } from "../utils/TipoRelacional";
export declare class Relacional extends Expression {
    private izquierdo;
    private derecho;
    private operador;
    constructor(izquierdo: Expression, derecho: Expression, operador: tipoRelacional, linea: number, columna: number);
    execute(env: Environment): Return;
}
