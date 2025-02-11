import { Environment } from "./Environment";
import { Return } from "./Return";

export abstract class Expression {
    public line: number;
    public column : number;
    constructor(line : number, column : number){
        this.line = line;
        this.column = column;
    }

    public abstract execute(env: Environment) : Return;
    public abstract drawAST():{rama:string;nodo:string};
}