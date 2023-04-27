import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Declaration } from "./Declaration";
import { AsignarValor } from "./AsignarValor";

export class InsFor extends Instruction {
    constructor(private declaracion: Declaration|AsignarValor, private condicion: Expression, private incremento: Expression|AsignarValor, private statement: Instruction, linea: number, columna: number) {
        super(linea, columna);
    }
    
    public execute(env: Environment) {
        this.declaracion.execute(env);
        const valorR = this.condicion.execute(env);
        if(valorR != null && valorR != undefined){
            while(valorR) {
                const valorR = this.condicion.execute(env);
                if(!valorR.value){
                    break;
                }
               this.statement.execute(env);
                this.incremento.execute(env);
            }
        }
    }
}