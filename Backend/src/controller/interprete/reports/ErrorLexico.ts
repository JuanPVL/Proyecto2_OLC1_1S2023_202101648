import { Instruction } from "../abstract/Instruction";
import { ErrorL,ListaErrores } from "./ErrorL";

export class ErrorLexico extends Instruction{
    constructor(public error:string ,line:number, column:number){
        super(line,column);
    }

    public execute() {

        ListaErrores.push(new ErrorL("Léxico", "El caracter "+this.error+" no pertenece al lenguaje",  this.line.toString(), this.column.toString() ));
   
    }
    public drawAST(): {rama: string, nodo:string} {
      
        return {rama: "", nodo:""}
    }

}