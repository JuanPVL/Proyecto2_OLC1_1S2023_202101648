import { Expression } from "../abstract/Expression";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

export class Incremento extends Expression {
    constructor(private id:string,linea:number,columna:number) {
        super(linea,columna);
    }

    public execute(env:Environment): Return {
        if(this.id != null) {
            let value = env.getVariable(this.id);
            if(value != null) {
                if(value.tipo == tipo.INT) {
                    value.valor = value.valor + 1;
                    return {value: value.valor, type: value.tipo};
                } else if(value.tipo == tipo.DOUBLE) {
                    value.valor = value.valor + 1.0;
                    return {value: value.valor, type: value.tipo};
                } else {
                    return {value: null, type: tipo.NULL};
                }
            } else {
                throw new Error("Variable no encontrada");
            }
        }
       return {value: null, type: tipo.NULL}; 
    }
}