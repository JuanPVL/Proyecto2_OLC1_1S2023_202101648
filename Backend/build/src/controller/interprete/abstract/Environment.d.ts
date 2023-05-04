import { Symbol } from "./Symbol";
import { tipo } from "./Return";
import { Funcion } from "../Instructions/Funcion";
export declare class Environment {
    private anterior;
    private nombreEntorno;
    private variables;
    private funciones;
    constructor(anterior: Environment | null, nombreEntorno: string);
    guardar(id: string, valor: any, tipo: tipo, linea: number, columna: number): void;
    guardarFuncion(id: string, funcion: Funcion): void;
    getFuncion(id: string): Funcion | null;
    getVariable(id: string): Symbol | null;
    getGlobal(): Environment;
}
