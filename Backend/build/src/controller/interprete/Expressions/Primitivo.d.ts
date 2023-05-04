import { Expression } from "../abstract/Expression";
import { tipo, Return } from "../abstract/Return";
export declare class Primitivo extends Expression {
    private value;
    private tipo;
    constructor(line: number, column: number, value: any, tipo: tipo);
    execute(): Return;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
