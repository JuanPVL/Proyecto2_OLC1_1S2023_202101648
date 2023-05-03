import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Declaration } from "./Declaration";
import { AsignarValor } from "./AsignarValor";
import { tipo } from "../abstract/Return";
import { IContinue } from "./IContinue";
import { IBreak } from "./IBreak";
import { EReturn } from "../Expressions/EReturn";

export class InsFor extends Instruction {
    constructor(private declaracion: Declaration|AsignarValor, private condicion: Expression, private incremento: Expression|AsignarValor, private statement: Instruction, linea: number, columna: number) {
        super(linea, columna);
    }
    
    public execute(env: Environment) {
        this.declaracion.execute(env);
        const valorR = this.condicion.execute(env);
        if(valorR != null && valorR != undefined){
           cicloPrincipal:while(valorR) {
                const valorR = this.condicion.execute(env);
                if(!valorR.value){
                    break;
                }
               const element = this.statement.execute(env);
               if (element instanceof IBreak) {
                //console.log("Estoy en if break")
                break cicloPrincipal;
               } 
               else if (element instanceof IContinue) {
                //console.log("Estoy en if continue")
                    this.incremento.execute(env);
                    continue cicloPrincipal;
               } else if(element != null && element != undefined){
                //console.log("Estoy en if return")
                    return element;
               }
               
                this.incremento.execute(env);
            }
        }
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (100 - 0) + 0);
        const nombreNodo = `nodoFor${id.toString()}`;
        let ramaFor = `${nombreNodo}[label="For"];`;
        const codigoRama : {rama:string, nodo:string} = this.declaracion.drawAST();
        ramaFor += codigoRama.rama;
        ramaFor += `${nombreNodo} -> ${codigoRama.nodo};\n`;
        const codigoRama2 : {rama:string, nodo:string} = this.condicion.drawAST();
        ramaFor += codigoRama2.rama;
        ramaFor += `${nombreNodo} -> ${codigoRama2.nodo};\n`;
        const codigoRama3 : {rama:string, nodo:string} = this.incremento.drawAST();
        ramaFor += codigoRama3.rama;
        ramaFor += `${nombreNodo} -> ${codigoRama3.nodo};\n`;

        const codeRamaI : {rama:string, nodo:string} = this.statement.drawAST();
        ramaFor += codeRamaI.rama;
        const ramaExtra = codeRamaI.nodo.split("nodo");
        for(let i = 1; i < ramaExtra.length; i++){
            ramaFor += `${nombreNodo} -> ${ramaExtra[i]};\n`;
        }
        return {rama:ramaFor,nodo:nombreNodo};
    }
}