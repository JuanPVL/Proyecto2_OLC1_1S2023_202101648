import { Symbol } from "./Symbol";
import { tipo } from "./Return";
import { printList } from "../reports/PrintList";
import { TablaSimbolos,ListaTabla } from "../reports/TablaSimbolos";
import { Funcion } from "../Instructions/Funcion";

export class Environment {
    private variables = new Map<string, Symbol>();
    private funciones = new Map<string, Funcion>();

    constructor(private anterior: Environment | null) {
        this.variables = new Map<string, Symbol>();
        this.funciones = new Map<string, Funcion>();
    }

    public guardar(id: string, valor:any, tipo:tipo, linea:number,columna:number) {
        let env: Environment | null = this;

        if(!env.variables.has(id.toLowerCase())) {
            env.variables.set(id.toLowerCase(), new Symbol(valor,id,tipo));
            //ListaTabla.push(new TablaSimbolos(id,tipo.toString(),"Global",linea.toString(),columna.toString()));
        } else {
            printList.push("Error, la variable " + id + " ya existe en el entorno, linea " + linea + " y columna " + columna);
        }
    }

    public guardarFuncion(id:string,funcion:Funcion) {
        let env:Environment | null = this;
        if(!env.funciones.has(id.toLowerCase())) {
            env.funciones.set(id.toLowerCase(),funcion);
        } else {
            printList.push("Error, la funcion " + id + " ya existe en el entorno");
        }
    }

    public getFuncion(id:string):Funcion | null {
        let env:Environment | null = this;
        while(env != null) {
            if(env.funciones.has(id.toLowerCase())) {
                return env.funciones.get(id.toLowerCase())!;
            }
            env = env.anterior;
        }
        return null;
    }

    public getVariable(id: string): Symbol | null {
        let env: Environment | null = this;

        while(env != null) {
            if(env.variables.has(id.toLowerCase())) {
                return env.variables.get(id.toLowerCase())!;
            }
            env = env.anterior;
        }
        return null;
    }

    public getGlobal(): Environment {
        let env: Environment | null = this;

        while(env.anterior != null) {
            env = env.anterior;
        }
        return env;
    }
}