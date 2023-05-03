import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";

export class Default extends Instruction{
    constructor(linea:number, columna:number){
        super(linea,columna);
    }

    public execute(env: Environment) {
        return this;
    }

    public drawAST(): { rama: string; nodo: string; } {
        return {rama:"",nodo:""};
    }
}