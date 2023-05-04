"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBreak = void 0;
const Instruction_1 = require("../abstract/Instruction");
class IBreak extends Instruction_1.Instruction {
    constructor(line, column) {
        super(line, column);
    }
    execute(env) {
        return this;
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        let nombreNodo = `nodoBreak${id.toString()}\n`;
        let rama = `${nombreNodo}[label="Break"];\n`;
        return { rama: rama, nodo: nombreNodo };
    }
}
exports.IBreak = IBreak;
