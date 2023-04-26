"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relacional = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
const TipoRelacional_1 = require("../utils/TipoRelacional");
class Relacional extends Expression_1.Expression {
    constructor(izquierdo, derecho, operador, linea, columna) {
        super(linea, columna);
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = operador;
    }
    execute(env) {
        if (this.operador == TipoRelacional_1.tipoRelacional.IGUALACION) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if (operador1.type == Return_1.tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if (operador2.type == Return_1.tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return { value: operador1.value == operador2.value, type: Return_1.tipo.BOOLEAN };
        }
        else if (this.operador == TipoRelacional_1.tipoRelacional.DIFERENTE) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if (operador1.type == Return_1.tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if (operador2.type == Return_1.tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return { value: operador1.value != operador2.value, type: Return_1.tipo.BOOLEAN };
        }
        else if (this.operador == TipoRelacional_1.tipoRelacional.MENORQUE) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if (operador1.type == Return_1.tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if (operador2.type == Return_1.tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return { value: operador1.value < operador2.value, type: Return_1.tipo.BOOLEAN };
        }
        else if (this.operador == TipoRelacional_1.tipoRelacional.MENORIGUAL) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if (operador1.type == Return_1.tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if (operador2.type == Return_1.tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return { value: operador1.value <= operador2.value, type: Return_1.tipo.BOOLEAN };
        }
        else if (this.operador == TipoRelacional_1.tipoRelacional.MAYORQUE) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if (operador1.type == Return_1.tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if (operador2.type == Return_1.tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return { value: operador1.value > operador2.value, type: Return_1.tipo.BOOLEAN };
        }
        else if (this.operador == TipoRelacional_1.tipoRelacional.MAYORIGUAL) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if (operador1.type == Return_1.tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if (operador2.type == Return_1.tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return { value: operador1.value >= operador2.value, type: Return_1.tipo.BOOLEAN };
        }
        return { value: null, type: Return_1.tipo.NULL };
    }
}
exports.Relacional = Relacional;
