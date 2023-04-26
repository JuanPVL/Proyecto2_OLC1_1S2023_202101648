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
}
exports.InsMain = InsMain;
