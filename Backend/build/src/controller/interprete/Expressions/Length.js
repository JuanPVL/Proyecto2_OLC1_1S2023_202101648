"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Length = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Length extends Expression_1.Expression {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute(env) {
        const valor = this.expresion.execute(env);
        if (valor.type == Return_1.tipo.STRING) {
            return { value: valor.value.length, type: Return_1.tipo.INT };
        }
        return { value: null, type: Return_1.tipo.NULL };
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoLength${id.toString()}`;
        let ramaLength = `${nodoPrincipal}[label="Length"];\n`;
        const codigoRama = this.expresion.drawAST();
        ramaLength += codigoRama.rama;
        ramaLength += `${nodoPrincipal} -> ${codigoRama.nodo};\n`;
        return { rama: ramaLength, nodo: nodoPrincipal };
    }
}
exports.Length = Length;
