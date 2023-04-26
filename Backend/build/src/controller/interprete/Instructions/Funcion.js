"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
const Instruction_1 = require("../abstract/Instruction");
class Funcion extends Instruction_1.Instruction {
    constructor(tipo, id, parametros, statement, line, column) {
        super(line, column);
        this.tipo = tipo;
        this.id = id;
        this.parametros = parametros;
        this.statement = statement;
    }
    execute(env) {
        //save function in the environment
        env.guardarFuncion(this.id, this);
    }
}
exports.Funcion = Funcion;
