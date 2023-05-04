"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaration = void 0;
const Instruction_1 = require("../abstract/Instruction");
class Declaration extends Instruction_1.Instruction {
    constructor(id, tipo, value, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.tipo = tipo;
        this.value = value;
    }
    execute(env) {
        if (this.value != null) {
            const value = this.value.execute(env);
            env.guardar(this.id, value.value, this.tipo, this.line, this.column);
        }
        else {
            if (this.tipo == 0) {
                env.guardar(this.id, 0, this.tipo, this.line, this.column);
            }
            else if (this.tipo == 1) {
                env.guardar(this.id, 0.0, this.tipo, this.line, this.column);
            }
            else if (this.tipo == 2) {
                env.guardar(this.id, true, this.tipo, this.line, this.column);
            }
            else if (this.tipo == 3) {
                env.guardar(this.id, '\u0000', this.tipo, this.line, this.column);
            }
            else if (this.tipo == 4) {
                env.guardar(this.id, "", this.tipo, this.line, this.column);
            }
        }
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoDeclarar${id.toString()}`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoIDPrincipal = `nodoIDD${id2.toString()}`;
        if (this.value != null) {
            const codigoAST = this.value.drawAST();
            let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n`;
            ramaDeclarar += `${nodoIDPrincipal}[label="${this.id.toString()}"];\n`;
            ramaDeclarar += codigoAST.rama + "\n";
            ramaDeclarar += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
            ramaDeclarar += `${nodoIDPrincipal} -> ${codigoAST.nodo};\n`;
            return { rama: ramaDeclarar, nodo: nodoPrincipal };
        }
        else {
            let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n`;
            ramaDeclarar += `${nodoIDPrincipal}[label="${this.id.toString()}"];\n`;
            ramaDeclarar += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
            return { rama: ramaDeclarar, nodo: nodoPrincipal };
        }
    }
}
exports.Declaration = Declaration;
