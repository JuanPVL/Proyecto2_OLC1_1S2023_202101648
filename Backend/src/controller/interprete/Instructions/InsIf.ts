import { Expression } from "../abstract/Expression";
import { tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";

export class InsIf extends Instruction {
    constructor(private condicion: Expression, private statement: Instruction, private inElse: Instruction, linea: number, columna: number) {
        super(linea, columna);
    }

    public execute(env: Environment) {
        const valorR = this.condicion.execute(env);
        if(valorR.value) {
            return this.statement.execute(env);
        } else if(this.inElse != null) {
            return this.inElse.execute(env);
        }
    }
}