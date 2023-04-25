import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";

export class InWhile extends Instruction {
    constructor(private condition: Expression, private statement: Instruction, line: number, column: number) {
        super(line, column);
    }

    public execute(env: Environment) {
        let valorR = this.condition.execute(env);
        let envWhile = new Environment(env);
        while(valorR.value) {
            this.statement.execute(envWhile);
            valorR = this.condition.execute(envWhile);
        }
    }
}