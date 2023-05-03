import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { IBreak } from "./IBreak";
import { IContinue } from "./IContinue";

export class InsDoWhile extends Instruction {
    constructor(private condition: Expression, private statement: Instruction, line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {
        let valorR = this.condition.execute(env);
        cicloPrincipal: do {
            const element = this.statement.execute(env);      
            if (element instanceof IBreak) {
                console.log("Estoy en if break")
                break cicloPrincipal;
               } 
               else if (element instanceof IContinue) {
                console.log("Estoy en if continue")
                   valorR = this.condition.execute(env);
                    continue cicloPrincipal;
               } else if(element != null && element != undefined){
                console.log("Estoy en if return")
                    return element;
               }
            valorR = this.condition.execute(env);
        } while(valorR.value);
    }

    public drawAST(): { rama: string; nodo: string; } {
        return {rama:"",nodo:""};
    }
}