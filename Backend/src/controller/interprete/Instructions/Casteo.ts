import { Instruction } from "../abstract/Instruction";
import { Return,tipo } from "../abstract/Return";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";

export class Casteo extends Instruction {
    constructor (private tipo:tipo,private value:Expression,line:number,column:number){
        super(line,column);
    }

    public execute(env:Environment){
        let value = this.value.execute(env);
        if(this.tipo == tipo.INT){
            if(value.type == tipo.CHAR || value.type == tipo.DOUBLE){
                if(value.type == tipo.CHAR){
                    return {value: parseInt(value.value.charCodeAt(0)), type: this.tipo};
            }else {
                return {value: parseInt(value.value), type: this.tipo};
            }
        }
    } else if (this.tipo == tipo.DOUBLE){
        if(value.type == tipo.CHAR || value.type == tipo.INT){
            if(value.type == tipo.CHAR){
                return {value: parseFloat(value.value.charCodeAt(0)), type: this.tipo};
            }else {
                return {value: parseFloat(value.value), type: this.tipo};
            }
        }
    } else if (this.tipo == tipo.CHAR){
        if(value.type == tipo.INT || value.type == tipo.DOUBLE){
            if(value.type == tipo.INT){
                return {value: String.fromCharCode(value.value), type: this.tipo};
            }
        }
    }
}
    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoCasteo${id.toString()}`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoIDPrincipal = `nodoIDCasteo${id2.toString()}`;
        const codigoAST:{rama:string,nodo:string} = this.value.drawAST();
        let ramaCasteo = `${nodoPrincipal}[label="Casteo"];\n`
        ramaCasteo += `${nodoIDPrincipal}[label="${tipo[this.tipo]}"];\n`;
        ramaCasteo += codigoAST.rama + "\n";
        ramaCasteo += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
        ramaCasteo += `${nodoIDPrincipal} -> ${codigoAST.nodo};\n`;
        return {rama:ramaCasteo,nodo:nodoPrincipal};
    }
}