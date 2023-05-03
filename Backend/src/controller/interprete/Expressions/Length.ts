import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Return,tipo } from "../abstract/Return";

export class Length extends Expression{
    constructor(private expresion:Expression, line:number, column:number){
        super(line, column);
    }


    public execute(env:Environment):Return{
        const valor = this.expresion.execute(env);
        if(valor.type == tipo.STRING){
            return  {value: valor.value.length, type: tipo.INT};
        }
        return {value: null, type: tipo.NULL};
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoLength${id.toString()}`;
        let ramaLength = `${nodoPrincipal}[label="Length"];\n`
        const codigoRama:{rama:string,nodo:string} = this.expresion.drawAST();
        ramaLength += codigoRama.rama;
        ramaLength += `${nodoPrincipal} -> ${codigoRama.nodo};\n`
        return {rama:ramaLength,nodo:nodoPrincipal}; 
    }
}