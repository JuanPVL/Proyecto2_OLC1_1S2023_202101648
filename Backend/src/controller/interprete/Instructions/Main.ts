import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { LlamadaFuncion } from "../Expressions/LlamadaFuncion";

export class InsMain extends Instruction{
    constructor(public funcion: LlamadaFuncion, linea:number, columna:number){
        super(linea, columna);
    }

    public execute(env:Environment) {
        this.funcion.execute(env);
    }


    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoMain${id.toString()}`;
        const nodoFuncion = this.funcion.drawAST();
        let ramaMain = `${nodoPrincipal}[label="Main"];\n`
        ramaMain += `${nodoPrincipal} -> ${nodoFuncion.nodo};\n`;
        ramaMain += nodoFuncion.rama;
        return {rama:ramaMain,nodo:nodoPrincipal};
    }
}