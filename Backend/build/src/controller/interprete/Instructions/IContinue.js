"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IContinue = void 0;
const Instruction_1 = require("../abstract/Instruction");
class IContinue extends Instruction_1.Instruction {
    constructor(line, column) {
        super(line, column);
    }
    execute(env) {
        return this;
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        let nombreNodo = `nodoContinue${id.toString()}`;
        let rama = `${nombreNodo}[label="Continue"];`;
        return { rama: rama, nodo: nombreNodo };
    }
}
exports.IContinue = IContinue;
