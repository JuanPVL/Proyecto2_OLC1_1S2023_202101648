import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";

export class InsDoWhile extends Instruction {
    constructor(private condition: Expression, private statement: Instruction, line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {
        let valorR = this.condition.execute(env);
        do {
            this.statement.execute(env);
            valorR = this.condition.execute(env);
        } while(valorR.value);
    }

    public drawAST(): { rama: string; nodo: string; } {
        return {rama:"",nodo:""};
    }
}