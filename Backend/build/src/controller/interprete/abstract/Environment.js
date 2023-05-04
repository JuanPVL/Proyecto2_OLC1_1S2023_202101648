"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const Symbol_1 = require("./Symbol");
const PrintList_1 = require("../reports/PrintList");
const TablaSimbolos_1 = require("../reports/TablaSimbolos");
class Environment {
    constructor(anterior, nombreEntorno) {
        this.anterior = anterior;
        this.nombreEntorno = nombreEntorno;
        this.variables = new Map();
        this.funciones = new Map();
        this.variables = new Map();
        this.funciones = new Map();
    }
    guardar(id, valor, tipo, linea, columna) {
        let env = this;
        let tipon = "";
        if (!env.variables.has(id.toLowerCase())) {
            env.variables.set(id.toLowerCase(), new Symbol_1.Symbol(valor, id, tipo));
            if (tipo == 0) {
                tipon = "int";
            }
            else if (tipo == 1) {
                tipon = "double";
            }
            else if (tipo == 2) {
                tipon = "boolean";
            }
            else if (tipo == 3) {
                tipon = "char";
            }
            else if (tipo == 4) {
                tipon = "string";
            }
            TablaSimbolos_1.ListaTabla.push(new TablaSimbolos_1.TablaSimbolos(id.toLowerCase(), "variable", tipon, env.nombreEntorno, linea.toString(), columna.toString()));
        }
        else {
            PrintList_1.printList.push("Error, la variable " + id + " ya existe en el entorno, linea " + linea + " y columna " + columna);
        }
    }
    guardarFuncion(id, funcion) {
        let tipo = "";
        let tipo2 = "";
        let env = this;
        if (!env.funciones.has(id.toLowerCase())) {
            env.funciones.set(id.toLowerCase(), funcion);
            if (funcion.tipo == 0) {
                tipo = "int";
                tipo2 = "funcion";
            }
            else if (funcion.tipo == 1) {
                tipo = "double";
                tipo2 = "funcion";
            }
            else if (funcion.tipo == 2) {
                tipo = "boolean";
                tipo2 = "funcion";
            }
            else if (funcion.tipo == 3) {
                tipo = "char";
                tipo2 = "funcion";
            }
            else if (funcion.tipo == 4) {
                tipo = "string";
                tipo2 = "funcion";
            }
            else if (funcion.tipo == 6) {
                tipo = "void";
                tipo2 = "metodo";
            }
            TablaSimbolos_1.ListaTabla.push(new TablaSimbolos_1.TablaSimbolos(id.toLowerCase(), tipo2, tipo, env.nombreEntorno, funcion.line.toString(), funcion.column.toString()));
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
