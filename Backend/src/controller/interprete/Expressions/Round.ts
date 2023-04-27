import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return,tipo } from "../abstract/Return";

export class Round extends Expression{
    constructor(private expresion:Expression, line:number, column:number){
        super(line, column);
    }


    public execute(env:Environment):Return {
        const valor = this.expresion.execute(env);
        if(valor.type == tipo.DOUBLE){
            return {value: Math.round(valor.value), type: tipo.INT};
        }
        return {value: null, type: tipo.NULL};
    }
}