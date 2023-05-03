import { Expression } from "../abstract/Expression";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { tipoLogico } from "../utils/TipoLogico";

export class Logica extends Expression {
    constructor(private izquierdo: Expression,private derecho: Expression, private operador: tipoLogico, linea: number, columna: number) {
        super(linea, columna);
    }

    public execute(env:Environment): Return {
        if(this.operador == tipoLogico.NOT) {
            const operador1 = this.derecho.execute(env);
            return {value:!(operador1.value),type:tipo.BOOLEAN}
        } else if(this.operador == tipoLogico.AND) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            return {value:(operador1.value && operador2.value),type:tipo.BOOLEAN}
        } else if(this.operador == tipoLogico.OR) {
            const operador1 = this.izquierdo.execute(env);
            const operador2 = this.derecho.execute(env);
            return {value:(operador1.value || operador2.value),type:tipo.BOOLEAN}
        }
        return {value: null, type: tipo.NULL};
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id =  Math.floor(Math.random() * (999 - 0) + 0);
        const nombreNodo = `nodoLogicon${id.toString()}`;
        let ramaA = `${nombreNodo}[label="Logico"];\n`;
        if(this.operador == tipoLogico.NOT) {
            const id2 =  Math.floor(Math.random() * (999 - 0) + 0);
            const codigoRama = `nodoLogicoLix${id2.toString()}`;
            let nodoMU = `${codigoRama}[label="NOT"];\n`;
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
            const codigoRama = `nodoLogicoLop${id2.toString()}`;
            let nodoOperador = `${codigoRama}[label="${tipoLogico[this.operador]}"];\n`;
            ramaA += nodoOperador;
            ramaA += `${nombreNodo} -> ${codigoRama};\n`;
            const codigoRamas2: {rama:string, nodo:string} = this.derecho.drawAST();
            ramaA += codigoRamas2.rama;
            ramaA += `${nombreNodo} -> ${codigoRamas2.nodo};\n`;
        }
        return {rama: ramaA, nodo: nombreNodo};
    }
}