"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logica = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
const TipoLogico_1 = require("../utils/TipoLogico");
class Logica extends Expression_1.Expression {
    constructor(izquierdo, derecho, operador, linea, columna) {
        super(linea, columna);
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = operador;
    }
    execute(env) {
        if (this.operador == TipoLogico_1.tipoLogico.NOT) {
            const operador1 = this.derecho.execute(env);
            return { value: !(operador1.value), type: Return_1.tipo.BOOLEAN };
        }
        else if (this.operador == TipoLogico_1.tipoLogico.AND) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            return { value: (operador1.value && operador2.value), type: Return_1.tipo.BOOLEAN };
        }
        else if (this.operador == TipoLogico_1.tipoLogico.OR) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            return { value: (operador1.value || operador2.value), type: Return_1.tipo.BOOLEAN };
        }
        return { value: null, type: Return_1.tipo.NULL };
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoLogicon${id.toString()}`;
        let ramaA = `${nombreNodo}[label="Logico"];\n`;
        if (this.operador == TipoLogico_1.tipoLogico.NOT) {
            const id2 = Math.floor(Math.random() * (999 - 0) + 0);
            const codigoRama = `nodoLogicoLix${id2.toString()}`;
            let nodoMU = `${codigoRama}[label="NOT"];\n`;
            ramaA += nodoMU;
            ramaA += `${nombreNodo} -> ${codigoRama};\n`;
            const codigoRamas = this.izquierdo.drawAST();
            ramaA += codigoRamas.rama;
            ramaA += `${nombreNodo} -> ${codigoRamas.nodo};\n`;
        }
        else {
            const codigoRamas = this.izquierdo.drawAST();
            ramaA += codigoRamas.rama;
            ramaA += `${nombreNodo} -> ${codigoRamas.nodo};\n`;
            const id2 = Math.floor(Math.random() * (999 - 0) + 0);
            const codigoRama = `nodoLogicoLop${id2.toString()}`;
            let nodoOperador = `${codigoRama}[label="${TipoLogico_1.tipoLogico[this.operador]}"];\n`;
            ramaA += nodoOperador;
            ramaA += `${nombreNodo} -> ${codigoRama};\n`;
            const codigoRamas2 = this.derecho.drawAST();
            ramaA += codigoRamas2.rama;
            ramaA += `${nombreNodo} -> ${codigoRamas2.nodo};\n`;
        }
        return { rama: ramaA, nodo: nombreNodo };
    }
}
exports.Logica = Logica;
