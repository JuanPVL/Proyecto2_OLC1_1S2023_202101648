import { Expression } from "../abstract/Expression";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";

export class Parametros extends Expression {
    constructor(private tipo:tipo,private id:string,line:number,column:number){
        super(line,column);
    }

    public execute(env: Environment): Return {
        return {value: this.id, type: this.tipo}
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoParametros${id.toString()}`;
        let ramaPa = `${nodoPrincipal}[label="${tipo[this.tipo]}"];\n`
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoIDPrincipal = `nodoIDPara${id2.toString()}`;
        ramaPa += `${nodoIDPrincipal}[label="${this.id}"];\n`;
        ramaPa += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
        return {rama:ramaPa,nodo:nodoPrincipal};
    }
}