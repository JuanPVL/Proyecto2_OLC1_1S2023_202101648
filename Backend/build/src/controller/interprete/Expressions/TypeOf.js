"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOf = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class TypeOf extends Expression_1.Expression {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute(env) {
        const valor = this.expresion.execute(env);
        if (valor.type == Return_1.tipo.STRING) {
            valor.value = "STRING";
            return { value: valor.value, type: Return_1.tipo.STRING };
        }
        else if (valor.type == Return_1.tipo.BOOLEAN) {
            valor.value = "BOOLEAN";
            return { value: valor.value, type: Return_1.tipo.STRING };
        }
        else if (valor.type == Return_1.tipo.CHAR) {
            valor.value = "CHAR";
            return { value: valor.value, type: Return_1.tipo.STRING };
        }
        else if (valor.type == Return_1.tipo.INT) {
            valor.value = "INT";
            return { value: valor.value, type: Return_1.tipo.STRING };
        }
        else if (valor.type == Return_1.tipo.DOUBLE) {
            valor.value = "DOUBLE";
            return { value: valor.value, type: Return_1.tipo.STRING };
        }
        return { value: null, type: Return_1.tipo.NULL };
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoTypeoff${id.toString()}`;
        let ramaTypeoff = `${nodoPrincipal}[label="Typeoff"];\n`;
        const codigoRama = this.expresion.drawAST();
        ramaTypeoff += codigoRama.rama;
        ramaTypeoff += `${nodoPrincipal} -> ${codigoRama.nodo};\n`;
        return { rama: ramaTypeoff, nodo: nodoPrincipal };
    }
}
exports.TypeOf = TypeOf;
