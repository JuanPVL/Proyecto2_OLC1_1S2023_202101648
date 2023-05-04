"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLexico = void 0;
const Instruction_1 = require("../abstract/Instruction");
const ErrorL_1 = require("./ErrorL");
class ErrorLexico extends Instruction_1.Instruction {
    constructor(error, line, column) {
        super(line, column);
        this.error = error;
    }
    execute() {
        ErrorL_1.ListaErrores.push(new ErrorL_1.ErrorL("Léxico", "El caracter " + this.error + " no pertenece al lenguaje", this.line.toString(), this.column.toString()));
    }
    drawAST() {
        return { rama: "", nodo: "" };
    }
}
exports.ErrorLexico = ErrorLexico;
