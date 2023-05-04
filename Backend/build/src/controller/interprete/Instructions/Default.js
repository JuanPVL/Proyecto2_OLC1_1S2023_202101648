"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const Instruction_1 = require("../abstract/Instruction");
class Default extends Instruction_1.Instruction {
    constructor(linea, columna) {
        super(linea, columna);
    }
    execute(env) {
        return this;
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        let nombreNodo = `nodoDefaultXD${id.toString()}`;
        let rama = `${nombreNodo}[label="Default"];`;
        return { rama: rama, nodo: nombreNodo };
    }
}
exports.Default = Default;
