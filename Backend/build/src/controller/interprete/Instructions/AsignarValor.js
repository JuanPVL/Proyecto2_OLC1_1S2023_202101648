"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignarValor = void 0;
const Instruction_1 = require("../abstract/Instruction");
class AsignarValor extends Instruction_1.Instruction {
    constructor(id, value, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.value = value;
    }
    execute(env) {
        let variable = env.getVariable(this.id);
        let valor = this.value.execute(env);
        if (variable != null) {
            if (variable.tipo == valor.type) {
                variable.valor = valor.value;
            }
            else {
                console.log("Error de tipos en la asignacion");
            }
        }
        else {
            console.log("La variable no existe");
        }
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoAsignar${id.toString()}`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoIDPrincipal = `nodoIDAsi${id2.toString()}`;
        const codigoAST = this.value.drawAST();
        let ramaAsignar = `${nodoPrincipal}[label="Asignar"];\n`;
        ramaAsignar += `${nodoIDPrincipal}[label="${this.id.toString()}"];\n`;
        ramaAsignar += codigoAST.rama + "\n";
        ramaAsignar += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
        ramaAsignar += `${nodoIDPrincipal} -> ${codigoAST.nodo};\n`;
        return { rama: ramaAsignar, nodo: nodoPrincipal };
    }
}
exports.AsignarValor = AsignarValor;
