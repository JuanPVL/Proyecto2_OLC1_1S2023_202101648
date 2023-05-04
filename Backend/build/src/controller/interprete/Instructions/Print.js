"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
const Instruction_1 = require("../abstract/Instruction");
const PrintList_1 = require("../reports/PrintList");
class Print extends Instruction_1.Instruction {
    constructor(line, column, expression) {
        super(line, column);
        this.expression = expression;
    }
    execute(env) {
        const value = this.expression.execute(env);
        PrintList_1.printList.push(value.value);
        console.log("Desde CMD: ", value.value);
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoPrint${id.toString()}`;
        let ramaPrint = `${nodoPrincipal}[label="Print"];\n`;
        const codigoRama = this.expression.drawAST();
        ramaPrint += codigoRama.rama;
        ramaPrint += `${nodoPrincipal} -> ${codigoRama.nodo};\n`;
        return { rama: ramaPrint, nodo: nodoPrincipal };
    }
}
exports.Print = Print;
