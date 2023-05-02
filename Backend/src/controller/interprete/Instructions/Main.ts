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
        return {rama:"",nodo:""};
    }
}