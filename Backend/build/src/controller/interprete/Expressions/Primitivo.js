"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primitivo = void 0;
const Expression_1 = require("../abstract/Expression");
const Return_1 = require("../abstract/Return");
class Primitivo extends Expression_1.Expression {
    constructor(line, column, value, tipo) {
        super(line, column);
        this.value = value;
        this.tipo = tipo;
    }
    execute() {
        switch (this.tipo) {
            case Return_1.tipo.INT:
                return { value: parseInt(this.value), type: Return_1.tipo.INT };
            case Return_1.tipo.DOUBLE:
                return { value: parseFloat(this.value), type: Return_1.tipo.DOUBLE };
            case Return_1.tipo.BOOLEAN:
                if (this.value.toString().toLowerCase() === "true") {
                    return { value: true, type: Return_1.tipo.BOOLEAN };
                }
                return { value: false, type: Return_1.tipo.BOOLEAN };
            case Return_1.tipo.CHAR:
                return { value: this.value, type: Return_1.tipo.CHAR };
            case Return_1.tipo.STRING:
                return { value: this.value, type: Return_1.tipo.STRING };
            default:
                return { value: null, type: Return_1.tipo.NULL };
        }
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoPrimitivo${id.toString()}`;
        const ramaPrimitivo = `${nodoPrincipal}[label="${this.value.toString()}"];\n`;
        // nodoPrimitivo${nodoPrincipal}[label="${this.value.toString()}"];\n
        // ${nodoPrincipal} -> nodoPrimitivo${nodoPrincipal};\n;
        return { rama: ramaPrimitivo, nodo: nodoPrincipal };
    }
}
exports.Primitivo = Primitivo;
