"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statement = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Environment_1 = require("../abstract/Environment");
const Incremento_1 = require("../Expressions/Incremento");
const Decremento_1 = require("../Expressions/Decremento");
class Statement extends Instruction_1.Instruction {
    constructor(body, line, column) {
        super(line, column);
        this.body = body;
    }
    execute(env) {
        const newEnv = new Environment_1.Environment(env, "Local");
        for (const instrucciones of this.body) {
            try {
                if (instrucciones instanceof Incremento_1.Incremento || instrucciones instanceof Decremento_1.Decremento) {
                    instrucciones.execute(newEnv);
                }
                else {
                    const dato = instrucciones.execute(newEnv);
                    if (dato != null && dato != undefined) {
                        return dato;
                    }
                }
            }
            catch (error) {
                console.log("Error en la ejecucion de la instruccion");
                if (error instanceof Error) {
                    console.log(error.stack);
                }
            }
        }
    }
    drawAST() {
        let rama = "";
        let nodo = "";
        for (let i = 0; i < this.body.length; i++) {
            let codeRamaS = this.body[i].drawAST();
            rama += codeRamaS.rama;
            nodo += codeRamaS.nodo;
        }
        return { rama: rama, nodo: nodo };
    }
}
exports.Statement = Statement;
