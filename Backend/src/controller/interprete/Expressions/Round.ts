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

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoRound${id.toString()}`;
        let ramaRound = `${nodoPrincipal}[label="Round"];\n`
        const codigoRama:{rama:string,nodo:string} = this.expresion.drawAST();
        ramaRound += codigoRama.rama;
        ramaRound += `${nodoPrincipal} -> ${codigoRama.nodo};\n`
        return {rama:ramaRound,nodo:nodoPrincipal}; 
    }
}