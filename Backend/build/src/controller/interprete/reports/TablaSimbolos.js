"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaTabla = exports.TablaSimbolos = void 0;
class TablaSimbolos {
    constructor(id, tipo, tipoPrimitivo, entorno, linea, columna) {
        this.id = id;
        this.tipo = tipo;
        this.tipoPrimitivo = tipoPrimitivo;
        this.entorno = entorno;
        this.linea = linea;
        this.columna = columna;
    }
}
exports.TablaSimbolos = TablaSimbolos;
exports.ListaTabla = [];
