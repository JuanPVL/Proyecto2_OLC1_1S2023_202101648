import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
export declare class InsSwitch extends Instruction {
    private condicion;
    private casos;
    constructor(condicion: Expression, casos: any, linea: number, columna: number);
    execute(env: Environment): void;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
