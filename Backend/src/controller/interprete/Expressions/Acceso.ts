import { Expression } from "../abstract/Expression";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

export class Acceso extends Expression {

    constructor(private id:string,linea:number,columna:number) {
        super(linea,columna);
    }

    public execute(env:Environment): Return {
        const value = env.getVariable(this.id);
        if(value) {
            return {value: value.valor, type: value.tipo};
        } else {
            return {value: null, type: tipo.NULL};
        }
    }
}