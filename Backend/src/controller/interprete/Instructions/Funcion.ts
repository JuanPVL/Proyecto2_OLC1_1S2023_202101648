import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { tipo } from "../abstract/Return";

export class Funcion extends Instruction{
    constructor(public tipo:tipo, private id:string, public parametros:Array<Expression>, public statement:Instruction, line:number, column:number){
        super(line, column);
    }

    public execute(env:Environment) {
        //save function in the environment
        env.guardarFuncion(this.id,this);
    }

    public drawAST(): { rama: string; nodo: string; } {
        return {rama:"",nodo:""};
    }
}