"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbol = void 0;
class Symbol {
    constructor(valor, id, tipo) {
        this.valor = valor;
        this.id = id.toLowerCase();
        this.tipo = tipo;
    }
}
exports.Symbol = Symbol;
