import { Expression } from "../abstract/Expression";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

export class Acceso extends Expression {

    constructor(public id:string,linea:number,columna:number) {
        super(linea,columna);
    }

    public execute(env:Environment): Return {
        const value = env.getVariable(this.id);
        if(value) {
            return {value: value.valor, type: value.tipo};
        } else {
            return {value: null, type: tipo.NULL};
        }
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (100 - 0) + 0);
        const nodoPrincipal = `nodoAcceso${id.toString()}`;
        const nodoIDPrincipal = `nodoID${id.toString()}`;
        let ramaAcceso = `${nodoPrincipal}[label="Acceso"];\n`
        ramaAcceso += `${nodoIDPrincipal}[label="${this.id.toString()}"];\n`;
        ramaAcceso += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
        return {rama:ramaAcceso,nodo:nodoPrincipal};
    }
}