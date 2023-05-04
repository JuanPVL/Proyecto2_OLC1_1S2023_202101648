"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToLowerUpper = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class ToLowerUpper extends Expression_1.Expression {
    constructor(tipo, expresion, line, column) {
        super(line, column);
        this.tipo = tipo;
        this.expresion = expresion;
    }
    execute(env) {
        const valor = this.expresion.execute(env);
        if (valor.type == Return_1.tipo.STRING) {
            if (this.tipo == 1) {
                return { value: valor.value.toLowerCase(), type: Return_1.tipo.STRING };
            }
            else if (this.tipo == 2) {
                return { value: valor.value.toUpperCase(), type: Return_1.tipo.STRING };
            }
        }
        return { value: null, type: Return_1.tipo.NULL };
    }
    drawAST() {
        if (this.tipo == 1) {
            const id = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoPrincipal = `nodoToLower${id.toString()}`;
            let ramaPToLower = `${nodoPrincipal}[label="ToLower"];\n`;
            const codigoRama = this.expresion.drawAST();
            ramaPToLower += codigoRama.rama;
            ramaPToLower += `${nodoPrincipal} -> ${codigoRama.nodo};\n`;
            return { rama: ramaPToLower, nodo: nodoPrincipal };
        }
        else if (this.tipo == 2) {
            const id = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoPrincipal = `nodoToUpper${id.toString()}`;
            let ramaPToUpper = `${nodoPrincipal}[label="ToUpper"];\n`;
            const codigoRama = this.expresion.drawAST();
            ramaPToUpper += codigoRama.rama;
            ramaPToUpper += `${nodoPrincipal} -> ${codigoRama.nodo};\n`;
            return { rama: ramaPToUpper, nodo: nodoPrincipal };
        }
        return { rama: "", nodo: "" };
    }
}
exports.ToLowerUpper = ToLowerUpper;
