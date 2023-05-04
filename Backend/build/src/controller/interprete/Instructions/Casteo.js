"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casteo = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
class Casteo extends Instruction_1.Instruction {
    constructor(tipo, value, line, column) {
        super(line, column);
        this.tipo = tipo;
        this.value = value;
    }
    execute(env) {
        let value = this.value.execute(env);
        if (this.tipo == Return_1.tipo.INT) {
            if (value.type == Return_1.tipo.CHAR || value.type == Return_1.tipo.DOUBLE) {
                if (value.type == Return_1.tipo.CHAR) {
                    return { value: parseInt(value.value.charCodeAt(0)), type: this.tipo };
                }
                else {
                    return { value: parseInt(value.value), type: this.tipo };
                }
            }
        }
        else if (this.tipo == Return_1.tipo.DOUBLE) {
            if (value.type == Return_1.tipo.CHAR || value.type == Return_1.tipo.INT) {
                if (value.type == Return_1.tipo.CHAR) {
                    return { value: parseFloat(value.value.charCodeAt(0)), type: this.tipo };
                }
                else {
                    return { value: parseFloat(value.value), type: this.tipo };
                }
            }
        }
        else if (this.tipo == Return_1.tipo.CHAR) {
            if (value.type == Return_1.tipo.INT || value.type == Return_1.tipo.DOUBLE) {
                if (value.type == Return_1.tipo.INT) {
                    return { value: String.fromCharCode(value.value), type: this.tipo };
                }
            }
        }
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoCasteo${id.toString()}`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoIDPrincipal = `nodoIDCasteo${id2.toString()}`;
        const codigoAST = this.value.drawAST();
        let ramaCasteo = `${nodoPrincipal}[label="Casteo"];\n`;
        ramaCasteo += `${nodoIDPrincipal}[label="${Return_1.tipo[this.tipo]}"];\n`;
        ramaCasteo += codigoAST.rama + "\n";
        ramaCasteo += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
        ramaCasteo += `${nodoIDPrincipal} -> ${codigoAST.nodo};\n`;
        return { rama: ramaCasteo, nodo: nodoPrincipal };
    }
}
exports.Casteo = Casteo;
