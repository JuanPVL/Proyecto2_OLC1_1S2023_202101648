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
            //console.log("obtengo el valor de return")
            return {value:rvalue.value, type: tipo.RETURN, tipo:rvalue.type};
        }
        return this
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoReturn${id.toString()}`;
        let ramaReturn = `${nombreNodo}[label="Return"];`;
        const codigoRama2 : {rama:string, nodo:string} = this.value.drawAST();
        ramaReturn += codigoRama2.rama;
        ramaReturn += `${nombreNodo} -> ${codigoRama2.nodo};\n`;
        return {rama:ramaReturn, nodo:nombreNodo};
    }
}