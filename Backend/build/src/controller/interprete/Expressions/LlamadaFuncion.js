"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlamadaFuncion = void 0;
const Expression_1 = require("../abstract/Expression");
const Environment_1 = require("../abstract/Environment");
const Return_1 = require("../abstract/Return");
class LlamadaFuncion extends Expression_1.Expression {
    constructor(id, argumentos, line, column) {
        super(line, column);
        this.id = id;
        this.argumentos = argumentos;
    }
    execute(env) {
        const funcion = env.getFuncion(this.id);
        if (funcion != null) {
            const envFuncion = new Environment_1.Environment(env.getGlobal(), "Parametro");
            if (funcion.parametros.length == this.argumentos.length) {
                for (let i = 0; i < funcion.parametros.length; i++) {
                    const valor = this.argumentos[i].execute(env);
                    const parametro = funcion.parametros[i].execute(envFuncion);
                    if (valor.type == parametro.type) {
                        envFuncion.guardar(parametro.value, valor.value, valor.type, this.line, this.column);
                    }
                    else {
                        console.log("Error, el parametro " + parametro.value + " no es del tipo " + valor.type + " linea " + this.line + " y columna " + this.column);
                    }
                }
                const retornar = funcion.statement.execute(envFuncion);
                //console.log(retornar);
                if (retornar != undefined) {
                    if (retornar.type == Return_1.tipo.RETURN) {
                        return { value: retornar.value, type: retornar.tipo };
                    }
                }
            }
            else {
                console.log("Error, la funcion " + this.id + " no tiene la cantidad de parametros correcta, linea " + this.line + " y columna " + this.column);
            }
        }
        else {
            console.log("Error, la funcion " + this.id + " no existe, linea " + this.line + " y columna " + this.column);
        }
    }
    drawAST() {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoLlamadaFunc${id.toString()}`;
        let ramaLlamada = `${nodoPrincipal}[label="Llamada Funcion"];`;
        ramaLlamada += `nodoEXLlama${nodoPrincipal}[label="${this.id}"];`;
        ramaLlamada += `${nodoPrincipal} -> nodoEXLlama${nodoPrincipal};\n`;
        return { rama: ramaLlamada, nodo: nodoPrincipal };
    }
}
exports.LlamadaFuncion = LlamadaFuncion;
