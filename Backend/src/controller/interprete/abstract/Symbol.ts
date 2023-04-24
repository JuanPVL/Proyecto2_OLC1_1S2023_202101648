import { tipo,Return } from "./Return";


export class Symbol {
    public valor:any;
    public id:string;
    public tipo: tipo;

    constructor(valor:any, id:string, tipo:tipo) {
        this.valor = valor;
        this.id = id.toLowerCase();
        this.tipo = tipo;
    }
}