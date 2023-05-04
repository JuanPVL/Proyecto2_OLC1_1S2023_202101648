"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parametros = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Parametros extends Expression_1.Expression {
    constructor(tipo, id, line, column) {
        super(line, column);
        this.tipo = tipo;
        this.id = id;
    }
    execute(env) {
        return { value: this.id, type: this.tipo };
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoParametros${id.toString()}`;
        let ramaPa = `${nodoPrincipal}[label="${Return_1.tipo[this.tipo]}"];\n`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoIDPrincipal = `nodoIDPara${id2.toString()}`;
        ramaPa += `${nodoIDPrincipal}[label="${this.id}"];\n`;
        ramaPa += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
        return { rama: ramaPa, nodo: nodoPrincipal };
    }
}
exports.Parametros = Parametros;
