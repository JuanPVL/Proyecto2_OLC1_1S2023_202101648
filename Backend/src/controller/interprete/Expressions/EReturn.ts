import { Expression } from "../abstract/Expression";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";

export class EReturn extends Instruction {
    constructor(private value:Expression, line:number, column:number){
        super(line,column);
    }

    public execute(env: Environment){
        if(this.value != null && this.value != undefined){
            let rvalue = this.value.execute(env);
            return {value:rvalue.value, type: tipo.RETURN, tipo:rvalue.type};
        }
        return this
    }

    public drawAST(): { rama: string; nodo: string; } {
        return {rama:"",nodo:""};
    }
}