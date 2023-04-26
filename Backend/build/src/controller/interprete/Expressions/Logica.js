"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logica = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
const TipoLogico_1 = require("../utils/TipoLogico");
class Logica extends Expression_1.Expression {
    constructor(izquiedo, derecho, operador, linea, columna) {
        super(linea, columna);
        this.izquiedo = izquiedo;
        this.derecho = derecho;
        this.operador = operador;
    }
    execute(env) {
        if (this.operador == TipoLogico_1.tipoLogico.NOT) {
            const operador1 = this.derecho.execute(env);
            return { value: !(operador1.value), type: Return_1.tipo.BOOLEAN };
        }
        else if (this.operador == TipoLogico_1.tipoLogico.AND) {
            const operador1 = this.izquiedo.execute(env);
            const operador2 = this.derecho.execute(env);
            return { value: (operador1.value && operador2.value), type: Return_1.tipo.BOOLEAN };
        }
        else if (this.operador == TipoLogico_1.tipoLogico.OR) {
            const operador1 = this.izquiedo.execute(env);
            const operador2 = this.derecho.execute(env);
            return { value: (operador1.value || operador2.value), type: Return_1.tipo.BOOLEAN };
        }
        return { value: null, type: Return_1.tipo.NULL };
    }
}
exports.Logica = Logica;
