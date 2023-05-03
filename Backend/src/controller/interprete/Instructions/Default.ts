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
        const id = Math.floor(Math.random() * (999-0) + 0);
        let nombreNodo = `nodoDefaultXD${id.toString()}`;
        let rama = `${nombreNodo}[label="Default"];`;
        return {rama:rama,nodo:nombreNodo};
    }
}