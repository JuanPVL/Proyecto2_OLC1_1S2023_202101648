"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Return_1 = require("../abstract/Return");
class Funcion extends Instruction_1.Instruction {
    constructor(tipo, id, parametros, statement, line, column) {
        super(line, column);
        this.tipo = tipo;
        this.id = id;
        this.parametros = parametros;
        this.statement = statement;
    }
    execute(env) {
        //save function in the environment
        env.guardarFuncion(this.id, this);
    }
    drawAST() {
        if (this.tipo == Return_1.tipo.VOID) {
            const id = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoPrincipal = `nodoMetodo${id.toString()}`;
            let ramaFuncion = `${nodoPrincipal}[label="Metodo"];\n`;
            const id2 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal = `nodoIDMet${id2.toString()}`;
            let nodovar = `${nodoIDPrincipal}[label="${Return_1.tipo[this.tipo]}"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
            const id3 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal2 = `nodoID2Met${id3.toString()}`;
            nodovar = `${nodoIDPrincipal2}[label="${this.id}"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal2};\n`;
            const id4 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal3 = `nodoID3Met${id4.toString()}`;
            nodovar = `${nodoIDPrincipal3}[label="Parametros"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal3};\n`;
            for (let i = 0; i < this.parametros.length; i++) {
                const codigoRamaParametros = this.parametros[i].drawAST();
                ramaFuncion += codigoRamaParametros.rama;
                ramaFuncion += `${nodoIDPrincipal3} -> ${codigoRamaParametros.nodo};`;
            }
            const id5 = Math.floor(Math.random() * (999 - 0) + 0);
            const codeStat = `nodoStat${id5.toString()}`;
            let nodoStat = `${codeStat}[label="Statement"];\n`;
            ramaFuncion += nodoStat;
            ramaFuncion += `${nodoPrincipal} -> ${codeStat};\n`;
            const codigoRamaStat = this.statement.drawAST();
            ramaFuncion += codigoRamaStat.rama;
            const extras = codigoRamaStat.nodo.split("nodo");
            for (let i = 1; i < extras.length; i++) {
                ramaFuncion += `${codeStat} -> nodo${extras[i]};\n`;
            }
            return { rama: ramaFuncion, nodo: nodoPrincipal };
        }
        else {
            const id = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoPrincipal = `nodoFuncion${id.toString()}`;
            let ramaFuncion = `${nodoPrincipal}[label="Funcion"];\n`;
            const id2 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal = `nodoIDF${id2.toString()}`;
            let nodovar = `${nodoIDPrincipal}[label="${Return_1.tipo[this.tipo]}"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
            const id3 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal2 = `nodoID2F${id3.toString()}`;
            nodovar = `${nodoIDPrincipal2}[label="${this.id}"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal2};\n`;
            const id4 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal3 = `nodoID3F${id4.toString()}`;
            nodovar = `${nodoIDPrincipal3}[label="Parametros"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal3};\n`;
            for (let i = 0; i < this.parametros.length; i++) {
                const codigoRamaParametros = this.parametros[i].drawAST();
                ramaFuncion += codigoRamaParametros.rama;
                ramaFuncion += `${nodoIDPrincipal3} -> ${codigoRamaParametros.nodo};`;
            }
            const id5 = Math.floor(Math.random() * (999 - 0) + 0);
            const codeStat = `nodoStat${id5.toString()}`;
            let nodoStat = `${codeStat}[label="Statement"];\n`;
            ramaFuncion += nodoStat;
            ramaFuncion += `${nodoPrincipal} -> ${codeStat};\n`;
            const codigoRamaStat = this.statement.drawAST();
            ramaFuncion += codigoRamaStat.rama;
            const extras = codigoRamaStat.nodo.split("nodo");
            for (let i = 1; i < extras.length; i++) {
                ramaFuncion += `${codeStat} -> nodo${extras[i]};\n`;
            }
            return { rama: ramaFuncion, nodo: nodoPrincipal };
        }
    }
}
exports.Funcion = Funcion;
