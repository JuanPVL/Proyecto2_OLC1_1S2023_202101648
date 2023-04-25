import { Expression } from "../abstract/Expression";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { tipoLogico } from "../utils/TipoLogico";

export class Logica extends Expression {
    constructor(private izquiedo: Expression,private derecho: Expression, private operador: tipoLogico, linea: number, columna: number) {
        super(linea, columna);
    }

    public execute(env:Environment): Return {
        if(this.operador == tipoLogico.NOT) {
            const operador1 = this.derecho.execute(env);
            return {value:!(operador1.value),type:tipo.BOOLEAN}
        } else if(this.operador == tipoLogico.AND) {
            const operador1 = this.izquiedo.execute(env);
            const operador2 = this.derecho.execute(env);
            return {value:(operador1.value && operador2.value),type:tipo.BOOLEAN}
        } else if(this.operador == tipoLogico.OR) {
            const operador1 = this.izquiedo.execute(env);
            const operador2 = this.derecho.execute(env);
            return {value:(operador1.value || operador2.value),type:tipo.BOOLEAN}
        }
        return {value: null, type: tipo.NULL};
    }
}