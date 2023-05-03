import { Expression } from "../abstract/Expression";
import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { IBreak } from "./IBreak";

export class Caso extends Instruction{
    constructor(public valor:Expression,public instrucciones:Array<Instruction>,line:number,column:number){
        super(line,column);
    }

    public execute(env: Environment) {
        let envCaso = new Environment(env,"Local");
        cicloP:for(let inst of this.instrucciones){
            let respuesta = inst.execute(envCaso);
            if(respuesta instanceof IBreak){
                break cicloP;
            }
        }
    }

    public drawAST(): { rama: string; nodo: string; } {
        return {rama:"",nodo:""};
    }
}