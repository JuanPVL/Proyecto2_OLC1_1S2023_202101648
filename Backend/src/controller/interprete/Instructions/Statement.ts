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
            }
        }
    }


    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (100 - 0) + 0);
        const nodoPrincipal = `nodoStatement${id.toString()}`;
        let ramaStatement = `${nodoPrincipal}[label="Statement"];\n`
        for(const instrucciones of this.body) {
            const codigoRama:{rama:string,nodo:string} = instrucciones.drawAST();
            ramaStatement += codigoRama.rama;
            ramaStatement += `${nodoPrincipal} -> ${codigoRama.nodo};\n`
        }
        return {rama:ramaStatement,nodo:nodoPrincipal};
    }
}