"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truncate = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Truncate extends Expression_1.Expression {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute(env) {
        const valor = this.expresion.execute(env);
        if (valor.type == Return_1.tipo.DOUBLE) {
            return { value: Math.trunc(valor.value), type: Return_1.tipo.DOUBLE };
        }
        return { value: null, type: Return_1.tipo.NULL };
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoTruncate${id.toString()}`;
        let ramaTruncate = `${nodoPrincipal}[label="Truncate"];\n`;
        const codigoRama = this.expresion.drawAST();
        ramaTruncate += codigoRama.rama;
        ramaTruncate += `${nodoPrincipal} -> ${codigoRama.nodo};\n`;
        return { rama: ramaTruncate, nodo: nodoPrincipal };
    }
}
exports.Truncate = Truncate;
