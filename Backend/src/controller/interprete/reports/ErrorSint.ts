import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";
import { ErrorL, ListaErroresS } from "./ErrorL";

export class ErrorSinta  extends Instruction{
    constructor(public error:string, line:number, column:number){
        super(line,column);
    }
    public execute(env: Environment) {
        ListaErroresS.push(new ErrorL("Sintactico","No se esperaba " + this.error,this.line.toString(),this.column.toString()));
    }

    public drawAST(): { rama: string; nodo: string; } {
        return {rama:"",nodo:""};
    }
}