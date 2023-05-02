import { Expression } from "../abstract/Expression";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

export class Incremento extends Expression {
    constructor(private id:string,linea:number,columna:number) {
        super(linea,columna);
    }

    public execute(env:Environment): Return {
        if(this.id != null) {
            let value = env.getVariable(this.id);
            if(value != null) {
                if(value.tipo == tipo.INT) {
                    value.valor = value.valor + 1;
                    return {value: value.valor, type: value.tipo};
                } else if(value.tipo == tipo.DOUBLE) {
                    value.valor = value.valor + 1.0;
                    return {value: value.valor, type: value.tipo};
                } else {
                    return {value: null, type: tipo.NULL};
                }
            } else {
                throw new Error("Variable no encontrada");
            }
        }
       return {value: null, type: tipo.NULL}; 
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (100 - 0) + 0);
        const nodoPrincipal = `nodoIncremento${id.toString()}`;
        const nodoIDPrincipal = `nodoID${id.toString()}`;
        let ramaIncremento = `${nodoPrincipal}[label="Incremento"];\n`
        ramaIncremento += `${nodoIDPrincipal}[label="${this.id.toString()}"];\n`;
        ramaIncremento += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
        return {rama:ramaIncremento,nodo:nodoPrincipal};
    }
}