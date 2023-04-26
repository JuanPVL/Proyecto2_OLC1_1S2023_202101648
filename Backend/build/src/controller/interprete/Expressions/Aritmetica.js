"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aritmetica = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
const TipoAritmetica_1 = require("../utils/TipoAritmetica");
const TablaDominante_1 = require("../utils/TablaDominante");
class Aritmetica extends Expression_1.Expression {
    constructor(izquierdo, derecho, operador, linea, columna) {
        super(linea, columna);
        this.izquierdo = izquierdo;
        this.derecho = derecho;
        this.operador = operador;
    }
    execute(env) {
        if (this.operador == TipoAritmetica_1.tipoAritmetica.SUMA) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = TablaDominante_1.tablaSuma[operador1.type][operador2.type];
            switch (tipoDominante) {
                case Return_1.tipo.INT:
                    if (operador1.type == Return_1.tipo.BOOLEAN) {
                        operador1.value = operador1.value ? 1 : 0;
                    }
                    if (operador2.type == Return_1.tipo.BOOLEAN) {
                        operador2.value = operador2.value ? 1 : 0;
                    }
                    if (operador1.type == Return_1.tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if (operador2.type == Return_1.tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return { value: operador1.value + operador2.value, type: Return_1.tipo.INT };
                case Return_1.tipo.DOUBLE:
                    if (operador1.type == Return_1.tipo.BOOLEAN) {
                        operador1.value = operador1.value ? 1 : 0;
                    }
                    if (operador2.type == Return_1.tipo.BOOLEAN) {
                        operador2.value = operador2.value ? 1 : 0;
                    }
                    if (operador1.type == Return_1.tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if (operador2.type == Return_1.tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return { value: operador1.value + operador2.value, type: Return_1.tipo.DOUBLE };
                case Return_1.tipo.STRING:
                    return { value: operador1.value + operador2.value, type: Return_1.tipo.STRING };
            }
        }
        else if (this.operador == TipoAritmetica_1.tipoAritmetica.RESTA) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = TablaDominante_1.tablaResta[operador1.type][operador2.type];
            switch (tipoDominante) {
                case Return_1.tipo.INT:
                    if (operador1.type == Return_1.tipo.BOOLEAN) {
                        operador1.value = operador1.value ? 1 : 0;
                    }
                    if (operador2.type == Return_1.tipo.BOOLEAN) {
                        operador2.value = operador2.value ? 1 : 0;
                    }
                    if (operador1.type == Return_1.tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if (operador2.type == Return_1.tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return { value: operador1.value - operador2.value, type: Return_1.tipo.INT };
                case Return_1.tipo.DOUBLE:
                    if (operador1.type == Return_1.tipo.BOOLEAN) {
                        operador1.value = operador1.value ? 1 : 0;
                    }
                    if (operador2.type == Return_1.tipo.BOOLEAN) {
                        operador2.value = operador2.value ? 1 : 0;
                    }
                    if (operador1.type == Return_1.tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
            }
        }
        else if (this.operador == TipoAritmetica_1.tipoAritmetica.MULTIPLICACION) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = TablaDominante_1.tablaMultiplicacion[operador1.type][operador2.type];
            switch (tipoDominante) {
                case Return_1.tipo.INT:
                    if (operador1.type == Return_1.tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if (operador2.type == Return_1.tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return { value: operador1.value * operador2.value, type: Return_1.tipo.INT };
                case Return_1.tipo.DOUBLE:
                    if (operador1.type == Return_1.tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if (operador2.type == Return_1.tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return { value: operador1.value * operador2.value, type: Return_1.tipo.DOUBLE };
            }
        }
        else if (this.operador == TipoAritmetica_1.tipoAritmetica.DIVISION) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = TablaDominante_1.tablaDivision[operador1.type][operador2.type];
            switch (tipoDominante) {
                case Return_1.tipo.DOUBLE:
                    if (operador1.type == Return_1.tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if (operador2.type == Return_1.tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return { value: operador1.value / operador2.value, type: Return_1.tipo.DOUBLE };
            }
        }
        else if (this.operador == TipoAritmetica_1.tipoAritmetica.POTENCIA) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = TablaDominante_1.tablaPotencia[operador1.type][operador2.type];
            switch (tipoDominante) {
                case Return_1.tipo.INT:
                    return { value: Math.pow(operador1.value, operador2.value), type: Return_1.tipo.INT };
                case Return_1.tipo.DOUBLE:
                    return { value: Math.pow(operador1.value, operador2.value), type: Return_1.tipo.DOUBLE };
            }
        }
        else if (this.operador == TipoAritmetica_1.tipoAritmetica.MODULO) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = TablaDominante_1.tablaModulo[operador1.type][operador2.type];
            switch (tipoDominante) {
                case Return_1.tipo.DOUBLE:
                    return { value: operador1.value % operador2.value, type: Return_1.tipo.DOUBLE };
            }
        }
        else if (this.operador == TipoAritmetica_1.tipoAritmetica.MENOSUNARIO) {
            const operador2 = this.izquierdo.execute(env);
            if (operador2.type == Return_1.tipo.INT) {
                return { value: -operador2.value, type: Return_1.tipo.INT };
            }
            else if (operador2.type == Return_1.tipo.DOUBLE) {
                return { value: -operador2.value, type: Return_1.tipo.DOUBLE };
            }
        }
        return { value: null, type: Return_1.tipo.NULL };
    }
}
exports.Aritmetica = Aritmetica;
