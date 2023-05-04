"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsMain = void 0;
const Instruction_1 = require("../abstract/Instruction");
class InsMain extends Instruction_1.Instruction {
    constructor(funcion, linea, columna) {
        super(linea, columna);
        this.funcion = funcion;
    }
    execute(env) {
        this.funcion.execute(env);
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoMain${id.toString()}`;
        const nodoFuncion = this.funcion.drawAST();
        let ramaMain = `${nodoPrincipal}[label="Main"];\n`;
        ramaMain += `${nodoPrincipal} -> ${nodoFuncion.nodo};\n`;
        ramaMain += nodoFuncion.rama;
        return { rama: ramaMain, nodo: nodoPrincipal };
    }
}
exports.InsMain = InsMain;
