import { Expression } from "../abstract/Expression"
import { tipo,Return } from "../abstract/Return";

export class Primitivo extends Expression {
    constructor(line: number, column: number, private value: any , private tipo: tipo) {
        super(line, column);
    }

    public execute(): Return {
        switch(this.tipo) {
            case tipo.INT:
                return {value: parseInt(this.value), type: tipo.INT};
            case tipo.DOUBLE:
                return {value: parseFloat(this.value), type: tipo.DOUBLE};
            case tipo.BOOLEAN:
                if(this.value.toString().toLowerCase() === "true"){
                    return {value: true, type: tipo.BOOLEAN};
                }
                return {value: false, type: tipo.BOOLEAN};
            case tipo.CHAR:
                return {value: this.value, type: tipo.CHAR};
            case tipo.STRING:
                return {value: this.value, type: tipo.STRING};
            default:
                return {value: null, type: tipo.NULL};
        }
        
    }
    
}