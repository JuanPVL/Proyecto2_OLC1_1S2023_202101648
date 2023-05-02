
export class TablaSimbolos {

    constructor(public id:string, public tipo:string,public tipoPrimitivo:string,public entorno:string, public linea:string, public columna:string) {

    }
}

export let ListaTabla:Array<TablaSimbolos> = [];