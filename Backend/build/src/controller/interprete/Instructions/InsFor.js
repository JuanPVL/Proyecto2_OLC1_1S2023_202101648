"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsFor = void 0;
const Instruction_1 = require("../abstract/Instruction");
const IContinue_1 = require("./IContinue");
const IBreak_1 = require("./IBreak");
class InsFor extends Instruction_1.Instruction {
    constructor(declaracion, condicion, incremento, statement, linea, columna) {
        super(linea, columna);
        this.declaracion = declaracion;
        this.condicion = condicion;
        this.incremento = incremento;
        this.statement = statement;
    }
    execute(env) {
        this.declaracion.execute(env);
        const valorR = this.condicion.execute(env);
        if (valorR != null && valorR != undefined) {
            cicloPrincipal: while (valorR) {
                const valorR = this.condicion.execute(env);
                if (!valorR.value) {
                    break;
                }
                const element = this.statement.execute(env);
                if (element instanceof IBreak_1.IBreak) {
                    //console.log("Estoy en if break")
                    break cicloPrincipal;
                }
                else if (element instanceof IContinue_1.IContinue) {
                    //console.log("Estoy en if continue")
                    this.incremento.execute(env);
                    continue cicloPrincipal;
                }
                else if (element != null && element != undefined) {
                    //console.log("Estoy en if return")
                    return element;
                }
                this.incremento.execute(env);
            }
        }
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoFor${id.toString()}`;
        let ramaFor = `${nombreNodo}[label="For"];`;
        const codigoRama = this.declaracion.drawAST();
        ramaFor += codigoRama.rama;
        ramaFor += `${nombreNodo} -> ${codigoRama.nodo};\n`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoCOndicion = `nodeConditionFOr${id2.toString()}`;
        let ramaCondicion = `${nodoCOndicion}[label="Condicion"];\n`;
        ramaFor += ramaCondicion;
        ramaFor += `${nombreNodo} -> ${nodoCOndicion};\n`;
        const codigoRama2 = this.condicion.drawAST();
        ramaFor += codigoRama2.rama;
        ramaFor += `${nodoCOndicion} -> ${codigoRama2.nodo};\n`;
        const codigoRama3 = this.incremento.drawAST();
        ramaFor += codigoRama3.rama;
        ramaFor += `${nombreNodo} -> ${codigoRama3.nodo};\n`;
        const codeRamaI = this.statement.drawAST();
        const id3 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoSta = `nodeStatementFor${id3.toString()}`;
        let ramaStatement = `${nodoSta}[label="Statement"];\n`;
        ramaFor += ramaStatement;
        ramaFor += `${nombreNodo} -> ${nodoSta};\n`;
        ramaFor += codeRamaI.rama;
        const ramaExtra = codeRamaI.nodo.split("nodo");
        for (let i = 1; i < ramaExtra.length; i++) {
            ramaFor += `${nodoSta} -> nodo${ramaExtra[i]};\n`;
        }
        return { rama: ramaFor, nodo: nombreNodo };
    }
}
exports.InsFor = InsFor;
