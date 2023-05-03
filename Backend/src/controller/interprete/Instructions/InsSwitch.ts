import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { Caso } from "./Caso";
import { IBreak } from "./IBreak";
import { Default } from "./Default";

export class InsSwitch extends Instruction {
    constructor(private condicion: Expression, private casos:any,linea: number, columna: number) {
        super(linea, columna);
    }

    public execute(env: Environment) {
        const condicionevaluar = this.condicion.execute(env)
        cicloP:for (var i = 0; i < this.casos.length; i++) {
            var bandera_break = false;
            const aux = this.casos[i];
            const valorcondicion = aux[0].execute(env);
            if(condicionevaluar.value == valorcondicion.value || valorcondicion instanceof Default){
                const auxval = aux[1];
                const retorno =auxval.execute(env);
                if(retorno != undefined || retorno != null){
                if(retorno instanceof IBreak){
                    bandera_break = true;
                }
                } 
            }
            if(bandera_break){
                break cicloP;
            }     
        }
    }

    public drawAST(): { rama: string; nodo: string; } {
        return {rama:"",nodo:""};
    }
}