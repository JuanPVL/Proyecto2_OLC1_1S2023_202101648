import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Instruction } from "../abstract/Instruction";
export declare class InsIf extends Instruction {
    private condicion;
    private statement;
    private inElse;
    constructor(condicion: Expression, statement: Instruction, inElse: Instruction, linea: number, columna: number);
    execute(env: Environment): any;
}
