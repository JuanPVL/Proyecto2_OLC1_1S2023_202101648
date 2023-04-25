import { Expression } from "../abstract/Expression";
import { Environment } from "../abstract/Environment";

export class LlamadaFuncion extends Expression {
    constructor(private id:string, private argumentos: Array<Expression>, line:number, column:number){
        super(line,column);
    }

    public execute(env:Environment):any {
        const funcion = env.getFuncion(this.id);
        if(funcion != null) {
            const envFuncion = new Environment(env.getGlobal());
            if(funcion.parametros.length == this.argumentos.length) {
                for(let i = 0; i < funcion.parametros.length; i++) {
                    const valor = this.argumentos[i].execute(env);
                    const parametro = funcion.parametros[i].execute(envFuncion);
                    if(valor.type == parametro.type) {
                        envFuncion.guardar(parametro.value,valor.value,valor.type,this.line,this.column);
                    } else {
                        console.log("Error, el parametro " + parametro.value + " no es del tipo " + valor.type + " linea " + this.line + " y columna " + this.column);
                    }
                }
                funcion.statement.execute(envFuncion);
            } else {
                console.log("Error, la funcion " + this.id + " no tiene la cantidad de parametros correcta, linea " + this.line + " y columna " + this.column);
            }
        } else {
            console.log("Error, la funcion " + this.id + " no existe, linea " + this.line + " y columna " + this.column);
        }
    }
}