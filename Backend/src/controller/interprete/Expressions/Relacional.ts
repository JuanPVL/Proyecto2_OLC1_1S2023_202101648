import { Expression } from "../abstract/Expression";
import { Return, tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { tipoRelacional } from "../utils/TipoRelacional";

export class Relacional extends Expression {
    constructor(private izquierdo: Expression, private derecho: Expression, private operador: tipoRelacional,linea: number, columna: number) {
        super(linea, columna);
    }

    public execute(env: Environment): Return {
        if(this.operador == tipoRelacional.IGUALACION) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if(operador1.type == tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if(operador2.type == tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return {value: operador1.value == operador2.value, type: tipo.BOOLEAN};
        } else if(this.operador == tipoRelacional.DIFERENTE) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if(operador1.type == tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if(operador2.type == tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return {value: operador1.value != operador2.value, type: tipo.BOOLEAN};
        } else if(this.operador == tipoRelacional.MENORQUE) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if(operador1.type == tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if(operador2.type == tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return {value: operador1.value < operador2.value, type: tipo.BOOLEAN};
        } else if(this.operador == tipoRelacional.MENORIGUAL) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if(operador1.type == tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if(operador2.type == tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return {value: operador1.value <= operador2.value, type: tipo.BOOLEAN};
        } else if(this.operador == tipoRelacional.MAYORQUE) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if(operador1.type == tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if(operador2.type == tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return {value: operador1.value > operador2.value, type: tipo.BOOLEAN};
        } else if(this.operador == tipoRelacional.MAYORIGUAL) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            if(operador1.type == tipo.CHAR) {
                operador1.value = operador1.value.charCodeAt(0);
            }
            if(operador2.type == tipo.CHAR) {
                operador2.value = operador2.value.charCodeAt(0);
            }
            return {value: operador1.value >= operador2.value, type: tipo.BOOLEAN};
        }
        return {value: null, type: tipo.NULL};
    }
}