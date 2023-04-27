import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return,tipo } from "../abstract/Return";

export class Truncate extends Expression{
    constructor(private expresion:Expression, line:number, column:number){
        super(line, column);
    }


    public execute(env:Environment):Return {
        const valor = this.expresion.execute(env);
        if(valor.type == tipo.DOUBLE){
            return {value: Math.trunc(valor.value), type: tipo.DOUBLE};
        }
        return {value: null, type: tipo.NULL};
    }
}