"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InWhile = void 0;
const Instruction_1 = require("../abstract/Instruction");
const IBreak_1 = require("./IBreak");
const IContinue_1 = require("./IContinue");
class InWhile extends Instruction_1.Instruction {
    constructor(condition, statement, line, column) {
        super(line, column);
        this.condition = condition;
        this.statement = statement;
    }
    execute(env) {
        let valorR = this.condition.execute(env);
        cicloPrincipal: while (valorR.value) {
            const element = this.statement.execute(env);
            if (element instanceof IBreak_1.IBreak) {
                //console.log("Estoy en if break")
                break cicloPrincipal;
            }
            else if (element instanceof IContinue_1.IContinue) {
                // console.log("Estoy en if continue")
                valorR = this.condition.execute(env);
                continue cicloPrincipal;
            }
            else if (element != null && element != undefined) {
                // console.log("Estoy en if return")
                return element;
            }
            valorR = this.condition.execute(env);
        }
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoWhile${id.toString()}`;
        let ramaWhile = `${nombreNodo}[label="While"];`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoCOndicion = `nodeConditionW${id2.toString()}`;
        let ramaCondicion = `${nodoCOndicion}[label="Condicion"];\n`;
        ramaWhile += ramaCondicion;
        ramaWhile += `${nombreNodo} -> ${nodoCOndicion};\n`;
        const codigoRama2 = this.condition.drawAST();
        ramaWhile += codigoRama2.rama;
        ramaWhile += `${nodoCOndicion} -> ${codigoRama2.nodo};\n`;
        const codeRamaI = this.statement.drawAST();
        const id3 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoSta = `nodeStatementWh${id3.toString()}`;
        let ramaStatement = `${nodoSta}[label="Statement"];\n`;
        ramaWhile += ramaStatement;
        ramaWhile += `${nombreNodo} -> ${nodoSta};\n`;
        ramaWhile += codeRamaI.rama;
        const ramaExtra = codeRamaI.nodo.split("nodo");
        for (let i = 1; i < ramaExtra.length; i++) {
            ramaWhile += `${nodoSta} -> nodo${ramaExtra[i]};\n`;
        }
        return { rama: ramaWhile, nodo: nombreNodo };
    }
}
exports.InWhile = InWhile;
