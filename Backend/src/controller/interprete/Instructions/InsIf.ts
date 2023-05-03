import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";

export class InsIf extends Instruction {
    constructor(private condicion: Expression, private statement: Instruction, private inElse: Instruction, linea: number, columna: number) {
        super(linea, columna);
    }

    public execute(env: Environment) {
        const valorR = this.condicion.execute(env);
        if(valorR.value) {
            return this.statement.execute(env);
        } else if(this.inElse != null) {
            return this.inElse.execute(env);
        }
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoIF${id.toString()}`;
        let ramaIf = `${nombreNodo}[label="IF"];`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoCOndicion = `nodeConditionIf${id2.toString()}`;
        let ramaCondicion = `${nodoCOndicion}[label="Condicion"];\n`;
        ramaIf += ramaCondicion;
        ramaIf += `${nombreNodo} -> ${nodoCOndicion};\n`;
        const codigoRama2 : {rama:string, nodo:string} = this.condicion.drawAST();
        ramaIf += codigoRama2.rama;
        ramaIf += `${nodoCOndicion} -> ${codigoRama2.nodo};\n`;

        const codeRamaI : {rama:string, nodo:string} = this.statement.drawAST();
        const id3 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoSta = `nodeStatementIF${id3.toString()}`
        let ramaStatement = `${nodoSta}[label="Statement"];\n`;
        ramaIf += ramaStatement;
        ramaIf += `${nombreNodo} -> ${nodoSta};\n`;
        ramaIf += codeRamaI.rama;
        const ramaExtra = codeRamaI.nodo.split("nodo");
        for(let i = 1; i < ramaExtra.length; i++){
            ramaIf += `${nodoSta} -> nodo${ramaExtra[i]};\n`;
        }
        if(this.inElse != null) {
            const codeRamaI2 : {rama:string, nodo:string} = this.inElse.drawAST();
            const id2 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoSta2 = `nodeStatementIF${id2.toString()}`
            let ramaStatement2 = `${nodoSta2}[label="Statement"];\n`;
            ramaIf += ramaStatement2;
            ramaIf += `${nombreNodo} -> ${nodoSta2};\n`;
            ramaIf += codeRamaI2.rama;
            const ramaExtra2 = codeRamaI2.nodo.split("nodo");
            for(let i = 1; i < ramaExtra2.length; i++){
                ramaIf += `${nodoSta2} -> nodo${ramaExtra2[i]};\n`;
            }
        }
        return {rama:ramaIf,nodo:nombreNodo};
    }
}