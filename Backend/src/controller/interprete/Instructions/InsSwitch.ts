import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";

export class InsSwitch extends Instruction {
    constructor(private condicion: Expression, private casos:any,linea: number, columna: number) {
        super(linea, columna);
    }

    public execute(env: Environment) {
        const ValorR = this.condicion.execute(env);
        for(let i=0; i < this.casos.length; i++) {
            
        }
    }

    public drawAST(): { rama: string; nodo: string; } {
        return {rama:"",nodo:""};
    }
}