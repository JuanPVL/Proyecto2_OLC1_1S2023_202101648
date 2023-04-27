import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return,tipo } from "../abstract/Return";

export class TypeOf extends Expression{
    constructor(private expresion:Expression, line:number, column:number){
        super(line, column);
    }


    public execute(env:Environment):Return{
        const valor = this.expresion.execute(env);
        if(valor.type == tipo.STRING){
            valor.value = "STRING";
            return {value: valor.value, type: tipo.STRING};
        } else if(valor.type == tipo.BOOLEAN ) {
            valor.value = "BOOLEAN";
            return {value: valor.value, type: tipo.STRING};
        } else if(valor.type == tipo.CHAR) {
            valor.value = "CHAR";
            return {value: valor.value, type: tipo.STRING};
        } else if(valor.type == tipo.INT){
            valor.value = "INT";
            return {value: valor.value, type: tipo.STRING};
        } else if(valor.type == tipo.DOUBLE){
            valor.value = "DOUBLE";
            return {value: valor.value, type: tipo.STRING};
        }
        return {value: null, type: tipo.NULL};
    }
}