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

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoTruncate${id.toString()}`;
        let ramaTruncate = `${nodoPrincipal}[label="Truncate"];\n`
        const codigoRama:{rama:string,nodo:string} = this.expresion.drawAST();
        ramaTruncate += codigoRama.rama;
        ramaTruncate += `${nodoPrincipal} -> ${codigoRama.nodo};\n`
        return {rama:ramaTruncate,nodo:nodoPrincipal}; 
    }
}