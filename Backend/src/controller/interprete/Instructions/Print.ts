import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression"
import { Instruction } from "../abstract/Instruction"
import { printList } from "../reports/PrintList";

export class Print extends Instruction {
    constructor(line: number, column: number, private expression: Expression) {
        super(line, column);
    }

    public execute(env: Environment): void {
       const value = this.expression.execute(env);
       printList.push(value.value)
        console.log("Desde CMD: " ,value.value);
    }


    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoPrint${id.toString()}`;
        let ramaPrint = `${nodoPrincipal}[label="Print"];\n`
        const codigoRama:{rama:string,nodo:string} = this.expression.drawAST();
        ramaPrint += codigoRama.rama;
        ramaPrint += `${nodoPrincipal} -> ${codigoRama.nodo};\n`
        return {rama:ramaPrint,nodo:nodoPrincipal}; 
    }
}