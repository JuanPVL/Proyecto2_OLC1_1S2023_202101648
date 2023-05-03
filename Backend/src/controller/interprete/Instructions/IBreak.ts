import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";
import { tipo } from "../abstract/Return";

export class IBreak extends Instruction{
    constructor(line: number, column: number){
        super(line, column);
    }

    public execute(env: Environment) {
        return this
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999-0) + 0);
        let nombreNodo = `nodoBreak${id.toString()}\n`;
        let rama = `${nombreNodo}[label="Break"];\n`;
        return {rama:rama,nodo:nombreNodo};
    }
}