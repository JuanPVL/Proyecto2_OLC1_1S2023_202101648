import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { IBreak } from "./IBreak";
import { IContinue } from "./IContinue";
import { Incremento } from "../Expressions/Incremento";
import { Decremento } from "../Expressions/Decremento";

export class InWhile extends Instruction {
    constructor(private condition: Expression, private statement: Instruction, line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {
        let valorR = this.condition.execute(env);
        cicloPrincipal:while(valorR.value) {
            const element = this.statement.execute(env);
            if (element instanceof IBreak) {
                //console.log("Estoy en if break")
                break cicloPrincipal;
               } 
               else if (element instanceof IContinue) {
               // console.log("Estoy en if continue")
                   valorR = this.condition.execute(env);
                    continue cicloPrincipal;
               } else if(element != null && element != undefined){
               // console.log("Estoy en if return")
                    return element;
               }
            valorR = this.condition.execute(env);
        }
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoWhile${id.toString()}`;
        let ramaWhile = `${nombreNodo}[label="While"];`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoCOndicion = `nodeConditionW${id2.toString()}`;
        let ramaCondicion = `${nodoCOndicion}[label="Condicion"];\n`;
        ramaWhile += ramaCondicion;
        ramaWhile += `${nombreNodo} -> ${nodoCOndicion};\n`;
        const codigoRama2 : {rama:string, nodo:string} = this.condition.drawAST();
        ramaWhile += codigoRama2.rama;
        ramaWhile += `${nodoCOndicion} -> ${codigoRama2.nodo};\n`;

        const codeRamaI : {rama:string, nodo:string} = this.statement.drawAST();
        const id3 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoSta = `nodeStatementWh${id3.toString()}`
        let ramaStatement = `${nodoSta}[label="Statement"];\n`;
        ramaWhile += ramaStatement;
        ramaWhile += `${nombreNodo} -> ${nodoSta};\n`;
        ramaWhile += codeRamaI.rama;
        const ramaExtra = codeRamaI.nodo.split("nodo");
        for(let i = 1; i < ramaExtra.length; i++){
            ramaWhile += `${nodoSta} -> nodo${ramaExtra[i]};\n`;
        }
        return {rama:ramaWhile,nodo:nombreNodo};
    }
}