"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Round = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Round extends Expression_1.Expression {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute(env) {
        const valor = this.expresion.execute(env);
        if (valor.type == Return_1.tipo.DOUBLE) {
            return { value: Math.round(valor.value), type: Return_1.tipo.INT };
        }
        return { value: null, type: Return_1.tipo.NULL };
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoRound${id.toString()}`;
        let ramaRound = `${nodoPrincipal}[label="Round"];\n`;
        const codigoRama = this.expresion.drawAST();
        ramaRound += codigoRama.rama;
        ramaRound += `${nodoPrincipal} -> ${codigoRama.nodo};\n`;
        return { rama: ramaRound, nodo: nodoPrincipal };
    }
}
exports.Round = Round;
