import { Instruction } from "../abstract/Instruction";
import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";
import { Declaration } from "./Declaration";
import { AsignarValor } from "./AsignarValor";
export declare class InsFor extends Instruction {
    private declaracion;
    private condicion;
    private incremento;
    private statement;
    constructor(declaracion: Declaration | AsignarValor, condicion: Expression, incremento: Expression | AsignarValor, statement: Instruction, linea: number, columna: number);
    execute(env: Environment): any;
    drawAST(): {
        rama: string;
        nodo: string;
    };
}
