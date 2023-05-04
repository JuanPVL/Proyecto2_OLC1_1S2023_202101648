"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorSinta = void 0;
const Instruction_1 = require("../abstract/Instruction");
const ErrorL_1 = require("./ErrorL");
class ErrorSinta extends Instruction_1.Instruction {
    constructor(error, line, column) {
        super(line, column);
        this.error = error;
    }
    execute(env) {
        ErrorL_1.ListaErroresS.push(new ErrorL_1.ErrorL("Sintactico", "No se esperaba " + this.error, this.line.toString(), this.column.toString()));
    }
    drawAST() {
        return { rama: "", nodo: "" };
    }
}
exports.ErrorSinta = ErrorSinta;
