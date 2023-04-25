import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";

export class Statement extends Instruction {
    constructor(private body: Array<Instruction>, line:number, column: number){
        super(line, column);
    }

    public execute(env: Environment) {
        const newEnv = new Environment(env);
        for(const instrucciones of this.body) {
            try {
                instrucciones.execute(newEnv);
            }catch (error) {
                console.log("Error en la ejecucion de la instruccion");
            }
        }
    }
}