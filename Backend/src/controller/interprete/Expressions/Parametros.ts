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
        return {rama:"",nodo:""};
    }
}