"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsIf = void 0;
const Instruction_1 = require("../abstract/Instruction");
class InsIf extends Instruction_1.Instruction {
    constructor(condicion, statement, inElse, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.statement = statement;
        this.inElse = inElse;
    }
    execute(env) {
        const valorR = this.condicion.execute(env);
        if (valorR.value) {
            return this.statement.execute(env);
        }
        else if (this.inElse != null) {
            return this.inElse.execute(env);
        }
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoIF${id.toString()}`;
        let ramaIf = `${nombreNodo}[label="IF"];`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoCOndicion = `nodeConditionIf${id2.toString()}`;
        let ramaCondicion = `${nodoCOndicion}[label="Condicion"];\n`;
        ramaIf += ramaCondicion;
        ramaIf += `${nombreNodo} -> ${nodoCOndicion};\n`;
        const codigoRama2 = this.condicion.drawAST();
        ramaIf += codigoRama2.rama;
        ramaIf += `${nodoCOndicion} -> ${codigoRama2.nodo};\n`;
        const codeRamaI = this.statement.drawAST();
        const id3 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoSta = `nodeStatementIF${id3.toString()}`;
        let ramaStatement = `${nodoSta}[label="Statement"];\n`;
        ramaIf += ramaStatement;
        ramaIf += `${nombreNodo} -> ${nodoSta};\n`;
        ramaIf += codeRamaI.rama;
        const ramaExtra = codeRamaI.nodo.split("nodo");
        for (let i = 1; i < ramaExtra.length; i++) {
            ramaIf += `${nodoSta} -> nodo${ramaExtra[i]};\n`;
        }
        if (this.inElse != null) {
            const codeRamaI2 = this.inElse.drawAST();
            const id2 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoSta2 = `nodeStatementIF${id2.toString()}`;
            let ramaStatement2 = `${nodoSta2}[label="Statement"];\n`;
            ramaIf += ramaStatement2;
            ramaIf += `${nombreNodo} -> ${nodoSta2};\n`;
            ramaIf += codeRamaI2.rama;
            const ramaExtra2 = codeRamaI2.nodo.split("nodo");
            for (let i = 1; i < ramaExtra2.length; i++) {
                ramaIf += `${nodoSta2} -> nodo${ramaExtra2[i]};\n`;
            }
        }
        return { rama: ramaIf, nodo: nombreNodo };
    }
}
exports.InsIf = InsIf;
