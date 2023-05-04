"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decremento = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Decremento extends Expression_1.Expression {
    constructor(id, linea, columna) {
        super(linea, columna);
        this.id = id;
    }
    execute(env) {
        if (this.id != null) {
            let value = env.getVariable(this.id);
            if (value != null) {
                if (value.tipo == Return_1.tipo.INT) {
                    value.valor = value.valor - 1;
                    return { value: value.valor, type: value.tipo };
                }
                else if (value.tipo == Return_1.tipo.DOUBLE) {
                    value.valor = value.valor - 1.0;
                    return { value: value.valor, type: value.tipo };
                }
                else {
                    return { value: null, type: Return_1.tipo.NULL };
                }
            }
            else {
                throw new Error("Variable no encontrada");
            }
        }
        return { value: null, type: Return_1.tipo.NULL };
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoDecremento${id.toString()}`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoIDPrincipal = `nodoID${id2.toString()}`;
        let ramaDecremento = `${nodoPrincipal}[label="Decremento"];\n`;
        ramaDecremento += `${nodoIDPrincipal}[label="${this.id.toString()}"];\n`;
        ramaDecremento += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
        return { rama: ramaDecremento, nodo: nodoPrincipal };
    }
}
exports.Decremento = Decremento;
