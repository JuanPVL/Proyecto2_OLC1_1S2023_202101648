"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsDoWhile = void 0;
const Instruction_1 = require("../abstract/Instruction");
const IBreak_1 = require("./IBreak");
const IContinue_1 = require("./IContinue");
class InsDoWhile extends Instruction_1.Instruction {
    constructor(condition, statement, line, column) {
        super(line, column);
        this.condition = condition;
        this.statement = statement;
    }
    execute(env) {
        let valorR = this.condition.execute(env);
        cicloPrincipal: do {
            const element = this.statement.execute(env);
            if (element instanceof IBreak_1.IBreak) {
                // console.log("Estoy en if break")
                break cicloPrincipal;
            }
            else if (element instanceof IContinue_1.IContinue) {
                //console.log("Estoy en if continue")
                valorR = this.condition.execute(env);
                continue cicloPrincipal;
            }
            else if (element != null && element != undefined) {
                // console.log("Estoy en if return")
                return element;
            }
            valorR = this.condition.execute(env);
        } while (valorR.value);
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoDoWhile${id.toString()}`;
        let ramaDoWhile = `${nombreNodo}[label="DoWhile"];`;
        const id4 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoDo = `nodeDo${id4.toString()}`;
        let ramaDo = `${nodoDo}[label="Do"];`;
        ramaDoWhile += ramaDo;
        ramaDoWhile += `${nombreNodo} -> ${nodoDo};\n`;
        const codeRamaI = this.statement.drawAST();
        const id3 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoSta = `nodeStatementWh${id3.toString()}`;
        let ramaStatement = `${nodoSta}[label="Statement"];\n`;
        ramaDoWhile += ramaStatement;
        ramaDoWhile += `${nodoDo} -> ${nodoSta};\n`;
        ramaDoWhile += codeRamaI.rama;
        const ramaExtra = codeRamaI.nodo.split("nodo");
        for (let i = 1; i < ramaExtra.length; i++) {
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
        const codigoRama2 = this.condition.drawAST();
        ramaDoWhile += codigoRama2.rama;
        ramaDoWhile += `${nodoCOndicion} -> ${codigoRama2.nodo};\n`;
        return { rama: ramaDoWhile, nodo: nombreNodo };
    }
}
exports.InsDoWhile = InsDoWhile;
