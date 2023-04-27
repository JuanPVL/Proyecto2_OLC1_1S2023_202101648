import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return,tipo } from "../abstract/Return";

export class ToString extends Expression{
    constructor(private expresion:Expression, line:number, column:number){
        super(line, column);
    }


    public execute(env:Environment):Return{
        const valor = this.expresion.execute(env);
        if(valor.type == tipo.BOOLEAN) {
            if(valor.value == true){
                valor.value = "true";
                return {value: valor.value, type: tipo.STRING};
            } else {
                valor.value = "false";
                return {value: valor.value, type: tipo.STRING};
            }
        } else if(valor.type == tipo.INT){
            let cadena:number = valor.value;
            valor.value = cadena.toString();
            return {value: valor.value, type: tipo.STRING};
        } else if(valor.type == tipo.DOUBLE){
            let cadena:number = valor.value;
            valor.value = cadena.toString();
            return {value: valor.value, type: tipo.STRING};
        }
        return {value: null, type: tipo.NULL};
    }
}