"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsIf = void 0;
const Instruction_1 = require("../abstract/Instruction");
class InsIf extends Instruction_1.Instruction {
    constructor(condicion, statement, inElse, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.statement = statement;
        this.inElse = inElse;
    }
    execute(env) {
        const valorR = this.condicion.execute(env);
        if (valorR.value) {
            return this.statement.execute(env);
        }
        else if (this.inElse != null) {
            return this.inElse.execute(env);
        }
    }
}
exports.InsIf = InsIf;
