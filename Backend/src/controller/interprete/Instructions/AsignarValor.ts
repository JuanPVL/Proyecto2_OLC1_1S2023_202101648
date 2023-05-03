import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { tipo } from "../abstract/Return";

export class AsignarValor extends Instruction {
    constructor(private id: string, private value: Expression, linea: number, columna: number) {
        super(linea, columna);
    }

    public execute(env: Environment):any {
        let variable = env.getVariable(this.id);
        let valor = this.value.execute(env);
        if(variable != null) {
            if(variable.tipo == valor.type) {
                variable.valor = valor.value;
            } else {
                console.log("Error de tipos en la asignacion");
            }
        } else {
            console.log("La variable no existe");
        }
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoAsignar${id.toString()}`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoIDPrincipal = `nodoIDAsi${id2.toString()}`;
        const codigoAST:{rama:string,nodo:string} = this.value.drawAST();
        let ramaAsignar = `${nodoPrincipal}[label="Asignar"];\n`
        ramaAsignar += `${nodoIDPrincipal}[label="${this.id.toString()}"];\n`;
        ramaAsignar += codigoAST.rama + "\n";
        ramaAsignar += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
        ramaAsignar += `${nodoIDPrincipal} -> ${codigoAST.nodo};\n`;
        return {rama:ramaAsignar,nodo:nodoPrincipal};
    }
}