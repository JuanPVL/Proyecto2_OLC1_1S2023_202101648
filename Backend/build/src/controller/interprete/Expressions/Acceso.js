"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acceso = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Acceso extends Expression_1.Expression {
    constructor(id, linea, columna) {
        super(linea, columna);
        this.id = id;
    }
    execute(env) {
        const value = env.getVariable(this.id);
        if (value) {
            return { value: value.valor, type: value.tipo };
        }
        else {
            return { value: null, type: Return_1.tipo.NULL };
        }
    }
}
exports.Acceso = Acceso;
