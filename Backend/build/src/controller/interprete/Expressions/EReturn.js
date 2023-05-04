"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EReturn = void 0;
const Return_1 = require("../abstract/Return");
const Instruction_1 = require("../abstract/Instruction");
class EReturn extends Instruction_1.Instruction {
    constructor(value, line, column) {
        super(line, column);
        this.value = value;
    }
    execute(env) {
        if (this.value != null && this.value != undefined) {
            let rvalue = this.value.execute(env);
            //console.log("obtengo el valor de return")
            return { value: rvalue.value, type: Return_1.tipo.RETURN, tipo: rvalue.type };
        }
        return this;
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoReturn${id.toString()}`;
        let ramaReturn = `${nombreNodo}[label="Return"];`;
        const codigoRama2 = this.value.drawAST();
        ramaReturn += codigoRama2.rama;
        ramaReturn += `${nombreNodo} -> ${codigoRama2.nodo};\n`;
        return { rama: ramaReturn, nodo: nombreNodo };
    }
}
exports.EReturn = EReturn;
