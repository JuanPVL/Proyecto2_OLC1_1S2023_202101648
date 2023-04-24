import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression"
import { Instruction } from "../abstract/Instruction"
import { printList } from "../reports/PrintList";

export class Print extends Instruction {
    constructor(line: number, column: number, private expression: Expression) {
        super(line, column);
    }

    public execute(env: Environment): void {
       const value = this.expression.execute(env);
       printList.push(value.value)
        console.log("Desde CMD: " ,value.value);
    }
}