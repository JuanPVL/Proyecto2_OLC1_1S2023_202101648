import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { tipoLogico } from "../utils/TipoLogico";
export declare class Logica extends Expression {
    private izquiedo;
    private derecho;
    private operador;
    constructor(izquiedo: Expression, derecho: Expression, operador: tipoLogico, linea: number, columna: number);
    execute(env: Environment): Return;
}
