import { Expression } from "../abstract/Expression";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

export class Decremento extends Expression {
    constructor(private id:string,linea:number,columna:number) {
        super(linea,columna);
    }

    public execute(env:Environment): Return {
        const value = env.getVariable(this.id);
        if(value != null) {
            if(value.tipo == tipo.INT || value.tipo == tipo.DOUBLE) {
                return {value: value.valor--, type: value.tipo};
            } else {
                return {value: null, type: tipo.NULL};
            }
        } else {
            throw new Error("Variable no encontrada");
        }
    }
}