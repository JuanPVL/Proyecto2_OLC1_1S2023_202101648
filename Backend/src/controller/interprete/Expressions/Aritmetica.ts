import { Expression } from "../abstract/Expression";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { tipoAritmetica } from "../utils/TipoAritmetica";
import { tablaSuma,tablaResta,tablaMultiplicacion,tablaDivision,tablaModulo,tablaPotencia } from "../utils/TablaDominante";

export class Aritmetica extends Expression {
    constructor(private izquierdo: Expression, private derecho: Expression, private operador: tipoAritmetica, linea: number, columna: number) {
        super(linea, columna);
    }   

    public execute(env: Environment): Return {
        if(this.operador == tipoAritmetica.SUMA){
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = tablaSuma[operador1.type][operador2.type];
            switch(tipoDominante){
                case tipo.INT: 
                    if(operador1.type == tipo.BOOLEAN) {
                        operador1.value = operador1.value ? 1 : 0;
                    }
                    if(operador2.type == tipo.BOOLEAN) {
                        operador2.value = operador2.value ? 1 : 0;
                    }
                    if(operador1.type == tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if(operador2.type == tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return {value: operador1.value + operador2.value, type: tipo.INT};
                case tipo.DOUBLE:
                    if(operador1.type == tipo.BOOLEAN) {
                        operador1.value = operador1.value ? 1 : 0;
                    }
                    if(operador2.type == tipo.BOOLEAN) {
                        operador2.value = operador2.value ? 1 : 0;
                    }
                    if(operador1.type == tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if(operador2.type == tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return {value: operador1.value + operador2.value, type: tipo.DOUBLE};
                case tipo.STRING:
                    return {value: operador1.value + operador2.value, type: tipo.STRING};
            }
        } 
        else if(this.operador == tipoAritmetica.RESTA) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = tablaResta[operador1.type][operador2.type];
            switch(tipoDominante){
                case tipo.INT:
                    if(operador1.type == tipo.BOOLEAN) {
                        operador1.value = operador1.value ? 1 : 0;
                    }
                    if(operador2.type == tipo.BOOLEAN) {
                        operador2.value = operador2.value ? 1 : 0;
                    }
                    if(operador1.type == tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if(operador2.type == tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return {value: operador1.value - operador2.value, type: tipo.INT};
                case tipo.DOUBLE:
                    if(operador1.type == tipo.BOOLEAN) {
                        operador1.value = operador1.value ? 1 : 0;
                    }
                    if(operador2.type == tipo.BOOLEAN) {
                        operador2.value = operador2.value ? 1 : 0;
                    }
                    if(operador1.type == tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    return {value: operador1.value - operador2.value, type: tipo.DOUBLE};
            }
        }
        else if(this.operador == tipoAritmetica.MULTIPLICACION) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = tablaMultiplicacion[operador1.type][operador2.type];
            switch(tipoDominante){
                case tipo.INT:
                    if(operador1.type == tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if(operador2.type == tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return {value: operador1.value * operador2.value, type: tipo.INT};
                case tipo.DOUBLE:
                    if(operador1.type == tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if(operador2.type == tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return {value: operador1.value * operador2.value, type: tipo.DOUBLE};
            }
        }
        else if(this.operador == tipoAritmetica.DIVISION) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = tablaDivision[operador1.type][operador2.type];
            switch(tipoDominante){
                case tipo.DOUBLE:
                    if(operador1.type == tipo.CHAR) {
                        operador1.value = operador1.value.charCodeAt(0);
                    }
                    if(operador2.type == tipo.CHAR) {
                        operador2.value = operador2.value.charCodeAt(0);
                    }
                    return {value: operador1.value / operador2.value, type: tipo.DOUBLE};
            }
        }
        else if(this.operador == tipoAritmetica.POTENCIA) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = tablaPotencia[operador1.type][operador2.type];
            switch(tipoDominante){
                case tipo.INT:
                    return {value: Math.pow(operador1.value, operador2.value), type: tipo.INT};
                case tipo.DOUBLE:
                    return {value: Math.pow(operador1.value, operador2.value), type: tipo.DOUBLE};
            }
        }
        else if(this.operador == tipoAritmetica.MODULO) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            const tipoDominante = tablaModulo[operador1.type][operador2.type];
            switch(tipoDominante){
                case tipo.DOUBLE:
                    return {value: operador1.value % operador2.value, type: tipo.DOUBLE};
            }
        }
        else if(this.operador == tipoAritmetica.MENOSUNARIO) {
            const operador2 = this.izquierdo.execute(env);
            if(operador2.type == tipo.INT) {
                return {value: -operador2.value, type: tipo.INT};
            }
            else if(operador2.type == tipo.DOUBLE) {
                return {value: -operador2.value, type: tipo.DOUBLE};
            }
        }
        return {value: null, type: tipo.NULL};
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id =  Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoAritmetica${id.toString()}`;
        let ramaA = `${nombreNodo}[label="Aritmetica"];\n`;
        if(this.operador == tipoAritmetica.MENOSUNARIO) {
            const id2 =  Math.floor(Math.random() * (999 - 0) + 0);
            const codigoRama = `nodoAritmeticaLix${id2.toString()}`;
            let nodoMU = `${codigoRama}[label="Menos Unario"];\n`;
            ramaA += nodoMU;
            ramaA += `${nombreNodo} -> ${codigoRama};\n`;
            const codigoRamas: {rama:string, nodo:string} = this.izquierdo.drawAST();
            ramaA += codigoRamas.rama;
            ramaA += `${nombreNodo} -> ${codigoRamas.nodo};\n`;
        } else {
            const codigoRamas: {rama:string, nodo:string} = this.izquierdo.drawAST();
            ramaA += codigoRamas.rama;
            ramaA += `${nombreNodo} -> ${codigoRamas.nodo};\n`;
            const id2 =  Math.floor(Math.random() * (999 - 0) + 0);
            const codigoRama = `nodoAritmeticaLop${id2.toString()}`;
            let nodoOperador = `${codigoRama}[label="${tipoAritmetica[this.operador]}"];\n`;
            ramaA += nodoOperador;
            ramaA += `${nombreNodo} -> ${codigoRama};\n`;
            const codigoRamas2: {rama:string, nodo:string} = this.derecho.drawAST();
            ramaA += codigoRamas2.rama;
            ramaA += `${nombreNodo} -> ${codigoRamas2.nodo};\n`;
        }
        return {rama: ramaA, nodo: nombreNodo};
    }
}