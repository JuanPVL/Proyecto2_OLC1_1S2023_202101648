export class ErrorL {
    constructor(public tipo:string, public descripcion:string, public linea:string, public columna:string) {
        
    }
}

export let ListaErrores:Array<ErrorL> = [];