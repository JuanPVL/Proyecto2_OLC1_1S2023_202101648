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
}