import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";

export class Statement extends Instruction {
    constructor(private body: Array<Instruction>, line:number, column: number){
        super(line, column);
    }

    public execute(env: Environment) {
        const newEnv = new Environment(env,"Local");
        for(const instrucciones of this.body) {
            try {
               const dato = instrucciones.execute(newEnv);
               if(dato != null && dato != undefined) {
                return dato;
               }
            }catch (error) {
                console.log("Error en la ejecucion de la instruccion");
                if(error instanceof Error){
                    console.log(error.stack);
                }
            }
        }
    }


    public drawAST(): { rama: string; nodo: string; } {
        let rama = "";
        let nodo = "";
        for(let i = 0; i < this.body.length; i++){
            let codeRamaS:{rama:string, nodo:string} = this.body[i].drawAST();
            rama += codeRamaS.rama;
            nodo += codeRamaS.nodo;
        }
        return {rama:rama,nodo:nodo};
        
    }
}