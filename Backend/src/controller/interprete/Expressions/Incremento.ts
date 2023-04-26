import { Expression } from "../abstract/Expression";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { Acceso } from "./Acceso";

export class Incremento extends Expression {
    constructor(private id:Acceso,linea:number,columna:number) {
        super(linea,columna);
    }

    public execute(env:Environment): Return {
        let id = this.id.id;
        if(id != null) {
            let value = env.getVariable(id);
            if(value != null) {
                if(value.tipo == tipo.INT || value.tipo == tipo.DOUBLE) {
                    return {value: value.valor++, type: value.tipo};
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