"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaErroresS = exports.ListaErrores = exports.ErrorL = void 0;
class ErrorL {
    constructor(tipo, descripcion, linea, columna) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.linea = linea;
        this.columna = columna;
    }
}
exports.ErrorL = ErrorL;
exports.ListaErrores = [];
exports.ListaErroresS = [];
