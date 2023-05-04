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
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoRelacional${id.toString()}`;
        let ramaRelacional = `${nodoPrincipal}[label="Relacional"];\n`;
        const codigoRama = this.izquierdo.drawAST();
        ramaRelacional += codigoRama.rama;
        ramaRelacional += `${nodoPrincipal} -> ${codigoRama.nodo};\n`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoRama = `nodoRelacionalLOL${id2.toString()}`;
        let nodoVar = `${nodoRama}[label="${TipoRelacional_1.tipoRelacional[this.operador]}"];\n`;
        ramaRelacional += nodoVar;
        ramaRelacional += `${nodoPrincipal} -> ${nodoRama};\n`;
        const codigoRama2 = this.derecho.drawAST();
        ramaRelacional += codigoRama2.rama;
        ramaRelacional += `${nodoPrincipal} -> ${codigoRama2.nodo};\n`;
        return { rama: ramaRelacional, nodo: nodoPrincipal };
    }
}
exports.Relacional = Relacional;
