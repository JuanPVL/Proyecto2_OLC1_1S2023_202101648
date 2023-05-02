import { Symbol } from "./Symbol";
import { tipo } from "./Return";
import { printList } from "../reports/PrintList";
import { TablaSimbolos,ListaTabla } from "../reports/TablaSimbolos";
import { Funcion } from "../Instructions/Funcion";

export class Environment {
    private variables = new Map<string, Symbol>();
    private funciones = new Map<string, Funcion>();

    constructor(private anterior: Environment | null,private nombreEntorno:string) {
        this.variables = new Map<string, Symbol>();
        this.funciones = new Map<string, Funcion>();
    }

    public guardar(id: string, valor:any, tipo:tipo, linea:number,columna:number) {
        let env: Environment | null = this;
        let tipon:string = "";
        if(!env.variables.has(id.toLowerCase())) {
            env.variables.set(id.toLowerCase(), new Symbol(valor,id,tipo));
            if(tipo == 0){
                tipon = "int";
            } else if(tipo == 1){
                tipon = "double";
            } else if(tipo == 2){
                tipon = "boolean";
            } else if(tipo == 3){
                tipon = "char";
            } else if(tipo == 4){
                tipon = "string";
            }
            ListaTabla.push(new TablaSimbolos(id.toLowerCase(),"variable",tipon,env.nombreEntorno,linea.toString(),columna.toString()));
        } else {
            printList.push("Error, la variable " + id + " ya existe en el entorno, linea " + linea + " y columna " + columna);
        }
    }

    public guardarFuncion(id:string,funcion:Funcion) {
        let tipo:string = "";
        let tipo2:string = "";
        let env:Environment | null = this;
        if(!env.funciones.has(id.toLowerCase())) {
            env.funciones.set(id.toLowerCase(),funcion);
            if(funcion.tipo == 0){
                tipo = "int";
                tipo2 = "funcion";
            } else if(funcion.tipo == 1){
                tipo = "double";
                tipo2 = "funcion";
            } else if(funcion.tipo == 2){
                tipo = "boolean";
                tipo2 = "funcion";
            } else if(funcion.tipo == 3){
                tipo = "char";
                tipo2 = "funcion";
            } else if(funcion.tipo == 4){
                tipo = "string";
                tipo2 = "funcion";
            } else if(funcion.tipo == 6){
                tipo = "void";
                tipo2 = "metodo";
            }

            ListaTabla.push(new TablaSimbolos(id.toLowerCase(),tipo2,tipo,env.nombreEntorno,funcion.line.toString(),funcion.column.toString()));
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