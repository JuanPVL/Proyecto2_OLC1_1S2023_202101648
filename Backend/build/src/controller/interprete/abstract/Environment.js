"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const Symbol_1 = require("./Symbol");
const PrintList_1 = require("../reports/PrintList");
class Environment {
    constructor(anterior) {
        this.anterior = anterior;
        this.variables = new Map();
        this.funciones = new Map();
        this.variables = new Map();
        this.funciones = new Map();
    }
    guardar(id, valor, tipo, linea, columna) {
        let env = this;
        if (!env.variables.has(id.toLowerCase())) {
            env.variables.set(id.toLowerCase(), new Symbol_1.Symbol(valor, id, tipo));
            //ListaTabla.push(new TablaSimbolos(id,tipo.toString(),"Global",linea.toString(),columna.toString()));
        }
        else {
            PrintList_1.printList.push("Error, la variable " + id + " ya existe en el entorno, linea " + linea + " y columna " + columna);
        }
    }
    guardarFuncion(id, funcion) {
        let env = this;
        if (!env.funciones.has(id.toLowerCase())) {
            env.funciones.set(id.toLowerCase(), funcion);
        }
        else {
            PrintList_1.printList.push("Error, la funcion " + id + " ya existe en el entorno");
        }
    }
    getFuncion(id) {
        let env = this;
        while (env != null) {
            if (env.funciones.has(id.toLowerCase())) {
                return env.funciones.get(id.toLowerCase());
            }
            env = env.anterior;
        }
        return null;
    }
    getVariable(id) {
        let env = this;
        while (env != null) {
            if (env.variables.has(id.toLowerCase())) {
                return env.variables.get(id.toLowerCase());
            }
            env = env.anterior;
        }
        return null;
    }
    getGlobal() {
        let env = this;
        while (env.anterior != null) {
            env = env.anterior;
        }
        return env;
    }
}
exports.Environment = Environment;
