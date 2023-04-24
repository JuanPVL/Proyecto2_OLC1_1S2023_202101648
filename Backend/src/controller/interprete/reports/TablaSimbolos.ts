
export class TablaSimbolos {

    constructor(public id:string, public tipo:string,public ambito:string, public linea:string, public columna:string) {

    }
}

export let ListaTabla:Array<TablaSimbolos> = [];