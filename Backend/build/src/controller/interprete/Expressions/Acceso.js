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
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoAcceso${id.toString()}`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoIDPrincipal = `nodoID${id2.toString()}`;
        let ramaAcceso = `${nodoPrincipal}[label="Acceso"];\n`;
        ramaAcceso += `${nodoIDPrincipal}[label="${this.id.toString()}"];\n`;
        ramaAcceso += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
        return { rama: ramaAcceso, nodo: nodoPrincipal };
    }
}
exports.Acceso = Acceso;
