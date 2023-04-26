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
}
exports.Print = Print;
