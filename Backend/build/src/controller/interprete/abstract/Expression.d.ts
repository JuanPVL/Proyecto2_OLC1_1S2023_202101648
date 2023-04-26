import { Environment } from "./Environment";
import { Return } from "./Return";
export declare abstract class Expression {
    line: number;
    column: number;
    constructor(line: number, column: number);
    abstract execute(env: Environment): Return;
}
