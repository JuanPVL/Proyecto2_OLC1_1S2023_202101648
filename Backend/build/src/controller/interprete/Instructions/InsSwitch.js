"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsSwitch = void 0;
const Instruction_1 = require("../abstract/Instruction");
const IBreak_1 = require("./IBreak");
const Default_1 = require("./Default");
class InsSwitch extends Instruction_1.Instruction {
    constructor(condicion, casos, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.casos = casos;
    }
    execute(env) {
        const condicionevaluar = this.condicion.execute(env);
        cicloP: for (var i = 0; i < this.casos.length; i++) {
            var bandera_break = false;
            const aux = this.casos[i];
            const valorcondicion = aux[0].execute(env);
            if (condicionevaluar.value == valorcondicion.value || valorcondicion instanceof Default_1.Default) {
                const auxval = aux[1];
                const retorno = auxval.execute(env);
                if (retorno != undefined || retorno != null) {
                    if (retorno instanceof IBreak_1.IBreak) {
                        bandera_break = true;
                    }
                }
            }
            if (bandera_break) {
                break cicloP;
            }
        }
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoSwitch${id.toString()}`;
        let ramaWhile = `${nombreNodo}[label="Switch"];`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoCOndicion = `nodeConditionW${id2.toString()}`;
        let ramaCondicion = `${nodoCOndicion}[label="Condicion"];\n`;
        ramaWhile += ramaCondicion;
        ramaWhile += `${nombreNodo} -> ${nodoCOndicion};\n`;
        const codigoRama2 = this.condicion.drawAST();
        ramaWhile += codigoRama2.rama;
        ramaWhile += `${nodoCOndicion} -> ${codigoRama2.nodo};\n`;
        for (let i = 0; i < this.casos.length; i++) {
            const aux = this.casos[i];
            const id3 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoCase = `nodeCaseW${id3.toString()}`;
            let ramaCase = `${nodoCase}[label="Case"];\n`;
            ramaWhile += ramaCase;
            ramaWhile += `${nombreNodo} -> ${nodoCase};\n`;
            const valorcondicion = aux[0].drawAST();
            ramaWhile += valorcondicion.rama;
            ramaWhile += `${nodoCase} -> ${valorcondicion.nodo};\n`;
        }
        return { rama: ramaWhile, nodo: nombreNodo };
    }
}
exports.InsSwitch = InsSwitch;
