import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { IBreak } from "./IBreak";
import { Default } from "./Default";

export class InsSwitch extends Instruction {
    constructor(private condicion: Expression, private casos:any,linea: number, columna: number) {
        super(linea, columna);
    }

    public execute(env: Environment) {
        const condicionevaluar = this.condicion.execute(env)
        cicloP:for (var i = 0; i < this.casos.length; i++) {
            var bandera_break = false;
            const aux = this.casos[i];
            const valorcondicion = aux[0].execute(env);
            if(condicionevaluar.value == valorcondicion.value || valorcondicion instanceof Default){
                const auxval = aux[1];
                const retorno =auxval.execute(env);
                if(retorno != undefined || retorno != null){
                if(retorno instanceof IBreak){
                    bandera_break = true;
                }
                } 
            }
            if(bandera_break){
                break cicloP;
            }     
        }
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoSwitch${id.toString()}`;
        let ramaWhile = `${nombreNodo}[label="Switch"];`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoCOndicion = `nodeConditionW${id2.toString()}`;
        let ramaCondicion = `${nodoCOndicion}[label="Condicion"];\n`;
        ramaWhile += ramaCondicion;
        ramaWhile += `${nombreNodo} -> ${nodoCOndicion};\n`;
        const codigoRama2 : {rama:string, nodo:string} = this.condicion.drawAST();
        ramaWhile += codigoRama2.rama;
        ramaWhile += `${nodoCOndicion} -> ${codigoRama2.nodo};\n`;

        for(let i=0;i<this.casos.length;i++){
            const aux = this.casos[i];
            const id3 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoCase = `nodeCaseW${id3.toString()}`;
            let ramaCase = `${nodoCase}[label="Case"];\n`;
            ramaWhile += ramaCase;
            ramaWhile += `${nombreNodo} -> ${nodoCase};\n`;
            const valorcondicion = aux[0].drawAST();
            ramaWhile += valorcondicion.rama;
            ramaWhile += `${nodoCase} -> ${valorcondicion.nodo};\n`;
        }
        return {rama:ramaWhile,nodo:nombreNodo};
    }
}