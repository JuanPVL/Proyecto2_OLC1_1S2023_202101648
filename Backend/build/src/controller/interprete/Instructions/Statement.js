"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statement = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Environment_1 = require("../abstract/Environment");
class Statement extends Instruction_1.Instruction {
    constructor(body, line, column) {
        super(line, column);
        this.body = body;
    }
    execute(env) {
        const newEnv = new Environment_1.Environment(env);
        for (const instrucciones of this.body) {
            try {
                instrucciones.execute(newEnv);
            }
            catch (error) {
                console.log("Error en la ejecucion de la instruccion");
            }
        }
    }
}
exports.Statement = Statement;
