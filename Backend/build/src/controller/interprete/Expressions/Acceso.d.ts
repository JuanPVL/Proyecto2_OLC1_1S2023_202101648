import { Expression } from "../abstract/Expression";
import { Return } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
export declare class Acceso extends Expression {
    private id;
    constructor(id: string, linea: number, columna: number);
    execute(env: Environment): Return;
}
