import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Declaration } from "./Declaration";
import { AsignarValor } from "./AsignarValor";

export class InsFor extends Instruction {
    constructor(private declaracion: Declaration|AsignarValor, private condicion: Expression, private incremento: Expression|AsignarValor, private statement: Instruction, linea: number, columna: number) {
        super(linea, columna);
    }
    
    public execute(env: Environment) {
        this.declaracion.execute(env);
        const valorR = this.condicion.execute(env);
        if(valorR != null && valorR != undefined){
            while(valorR) {
                const valorR = this.condicion.execute(env);
                if(!valorR.value){
                    break;
                }
               this.statement.execute(env);
                this.incremento.execute(env);
            }
        }
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (100 - 0) + 0);
        const nodoPrincipal = `nodoFor${id.toString()}`;
        const nodoDeclaracion = `nodoDeclaracion${id.toString()}`;
        const nodoCondicion = `nodoCondicion${id.toString()}`;
        const nodoIncremento = `nodoIncremento${id.toString()}`;
        const nodoStatement = `nodoStatement${id.toString()}`;
        const nodoIDIncremento = `nodoIDIncremento${id.toString()}`;
        const nodoIDCondicion = `nodoIDCondicion${id.toString()}`;
        const nodoIDDeclaracion = `nodoIDDeclaracion${id.toString()}`;
        const codigoAST:{rama:string,nodo:string} = this.statement.drawAST();
        let ramaFor = `${nodoPrincipal}[label="For"];\n`
        ramaFor += `${nodoDeclaracion}[label="Declaracion"];\n`;
        ramaFor += `${nodoIDDeclaracion}[label="${this.declaracion.toString()}"];\n`;
        ramaFor += `${nodoDeclaracion} -> ${nodoIDDeclaracion};\n`;
        ramaFor += `${nodoIDDeclaracion} -> ${codigoAST.nodo};\n`;
        ramaFor += `${nodoCondicion}[label="Condicion"];\n`;
        ramaFor += `${nodoIDCondicion}[label="${this.condicion.toString()}"];\n`;
        ramaFor += `${nodoCondicion} -> ${nodoIDCondicion};\n`;
        ramaFor += `${nodoIDCondicion} -> ${codigoAST.nodo};\n`;
        ramaFor += `${nodoIncremento}[label="Incremento"];\n`;
        ramaFor += `${nodoIDIncremento}[label="${this.incremento.toString()}"];\n`;
        ramaFor += `${nodoIncremento} -> ${nodoIDIncremento};\n`;
        ramaFor += `${nodoIDIncremento} -> ${codigoAST.nodo};\n`;
        ramaFor += `${nodoStatement}[label="Statement"];\n`;
        ramaFor += codigoAST.rama + "\n";
        ramaFor += `${nodoPrincipal} -> ${nodoDeclaracion};\n`;
        ramaFor += `${nodoPrincipal} -> ${nodoCondicion};\n`;
        ramaFor += `${nodoPrincipal} -> ${nodoIncremento};\n`;
        ramaFor += `${nodoPrincipal} -> ${nodoStatement};\n`;
        
        return {rama:ramaFor,nodo:nodoPrincipal};
    }
}