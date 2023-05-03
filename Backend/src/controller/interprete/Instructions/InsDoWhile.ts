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
               // console.log("Estoy en if break")
                break cicloPrincipal;
               } 
               else if (element instanceof IContinue) {
                //console.log("Estoy en if continue")
                   valorR = this.condition.execute(env);
                    continue cicloPrincipal;
               } else if(element != null && element != undefined){
               // console.log("Estoy en if return")
                    return element;
               }
            valorR = this.condition.execute(env);
        } while(valorR.value);
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoDoWhile${id.toString()}`;
        let ramaDoWhile = `${nombreNodo}[label="DoWhile"];`;
        const id4 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoDo = `nodeDo${id4.toString()}`;
        let ramaDo = `${nodoDo}[label="Do"];`;
        ramaDoWhile += ramaDo;
        ramaDoWhile += `${nombreNodo} -> ${nodoDo};\n`;
        const codeRamaI : {rama:string, nodo:string} = this.statement.drawAST();
        const id3 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoSta = `nodeStatementWh${id3.toString()}`
        let ramaStatement = `${nodoSta}[label="Statement"];\n`;
        ramaDoWhile += ramaStatement;
        ramaDoWhile += `${nodoDo} -> ${nodoSta};\n`;
        ramaDoWhile += codeRamaI.rama;
        const ramaExtra = codeRamaI.nodo.split("nodo");
        for(let i = 1; i < ramaExtra.length; i++){
            ramaDoWhile += `${nodoSta} -> nodo${ramaExtra[i]};\n`;
        }
        const id5 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoWhile = `nodeWhile${id5.toString()}`;
        let ramaWhile = `${nodoWhile}[label="While_DoWhile"];\n`;
        ramaDoWhile += ramaWhile;
        ramaDoWhile += `${nombreNodo} -> ${nodoWhile};\n`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoCOndicion = `nodeConditionW${id2.toString()}`;
        let ramaCondicion = `${nodoCOndicion}[label="Condicion"];\n`;
        ramaDoWhile += ramaCondicion;
        ramaDoWhile += `${nodoWhile} -> ${nodoCOndicion};\n`;
        const codigoRama2 : {rama:string, nodo:string} = this.condition.drawAST();
        ramaDoWhile += codigoRama2.rama;
        ramaDoWhile += `${nodoCOndicion} -> ${codigoRama2.nodo};\n`;
        return {rama:ramaDoWhile,nodo:nombreNodo};
    }
}