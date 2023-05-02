import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return,tipo } from "../abstract/Return";

export class ToLowerUpper extends Expression{
    constructor(private tipo:number, private expresion:Expression, line:number, column:number){
        super(line, column);
    }


    public execute(env:Environment):Return {
        const valor = this.expresion.execute(env);
        if(valor.type == tipo.STRING){
            if(this.tipo == 1){
                return {value: valor.value.toLowerCase(), type: tipo.STRING};
            } else if(this.tipo == 2){
                return {value: valor.value.toUpperCase(), type: tipo.STRING};
            }
        }
        return {value: null, type: tipo.NULL};
    }

    public drawAST(): { rama: string; nodo: string; } {
        return {rama:"",nodo:""};
    }
}