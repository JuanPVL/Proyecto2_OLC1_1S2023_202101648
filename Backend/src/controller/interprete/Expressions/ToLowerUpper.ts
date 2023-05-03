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
        if(this.tipo == 1){
            const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoToLower${id.toString()}`;
        let ramaPToLower = `${nodoPrincipal}[label="ToLower"];\n`
        const codigoRama:{rama:string,nodo:string} = this.expresion.drawAST();
        ramaPToLower += codigoRama.rama;
        ramaPToLower += `${nodoPrincipal} -> ${codigoRama.nodo};\n`
        return {rama:ramaPToLower,nodo:nodoPrincipal}; 
        } else if(this.tipo == 2){
            const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoToUpper${id.toString()}`;
        let ramaPToUpper = `${nodoPrincipal}[label="ToUpper"];\n`
        const codigoRama:{rama:string,nodo:string} = this.expresion.drawAST();
        ramaPToUpper += codigoRama.rama;
        ramaPToUpper += `${nodoPrincipal} -> ${codigoRama.nodo};\n`
        return {rama:ramaPToUpper,nodo:nodoPrincipal};
        }
       return {rama:"",nodo:""};
    }
}