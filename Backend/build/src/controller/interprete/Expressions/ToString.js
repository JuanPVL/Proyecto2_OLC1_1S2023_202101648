"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToString = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class ToString extends Expression_1.Expression {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute(env) {
        const valor = this.expresion.execute(env);
        if (valor.type == Return_1.tipo.BOOLEAN) {
            if (valor.value == true) {
                valor.value = "true";
                return { value: valor.value, type: Return_1.tipo.STRING };
            }
            else {
                valor.value = "false";
                return { value: valor.value, type: Return_1.tipo.STRING };
            }
        }
        else if (valor.type == Return_1.tipo.INT) {
            let cadena = valor.value;
            valor.value = cadena.toString();
            return { value: valor.value, type: Return_1.tipo.STRING };
        }
        else if (valor.type == Return_1.tipo.DOUBLE) {
            let cadena = valor.value;
            valor.value = cadena.toString();
            return { value: valor.value, type: Return_1.tipo.STRING };
        }
        return { value: null, type: Return_1.tipo.NULL };
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoToString${id.toString()}`;
        let ramaToString = `${nodoPrincipal}[label="ToString"];\n`;
        const codigoRama = this.expresion.drawAST();
        ramaToString += codigoRama.rama;
        ramaToString += `${nodoPrincipal} -> ${codigoRama.nodo};\n`;
        return { rama: ramaToString, nodo: nodoPrincipal };
    }
}
exports.ToString = ToString;
