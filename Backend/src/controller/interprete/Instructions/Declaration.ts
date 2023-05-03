import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { tipo } from "../abstract/Return";

export class Declaration extends Instruction {
    private id: string;
    private tipo: tipo;
    private value: Expression | null;

    constructor(id:string, tipo:tipo, value: Expression | null, linea:number, columna:number) {
        super(linea,columna);
        this.id = id;
        this.tipo = tipo;
        this.value = value;
    }

    public execute(env: Environment): any {
        if(this.value != null) {
            const value = this.value.execute(env);
            env.guardar(this.id,value.value,this.tipo,this.line,this.column);
        } else {
            if(this.tipo == 0) {
                env.guardar(this.id,0,this.tipo,this.line,this.column);
            } else if(this.tipo == 1) {
                env.guardar(this.id,0.0,this.tipo,this.line,this.column);
            } else if(this.tipo == 2) {
                env.guardar(this.id,true,this.tipo,this.line,this.column);
            } else if(this.tipo == 3) {
                env.guardar(this.id,'\u0000',this.tipo,this.line,this.column);
            } else if(this.tipo == 4) {
                env.guardar(this.id,"",this.tipo,this.line,this.column)
            }
        }
    }

    public drawAST(): { rama: string; nodo: string; } {
        const id = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoPrincipal = `nodoDeclarar${id.toString()}`;
        const id2 = Math.floor(Math.random() * (999 - 0) + 0);
        const nodoIDPrincipal = `nodoIDD${id2.toString()}`;
        if(this.value != null) {
            const codigoAST:{rama:string,nodo:string} = this.value.drawAST();
            let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n`
            ramaDeclarar += `${nodoIDPrincipal}[label="${this.id.toString()}"];\n`;
            ramaDeclarar += codigoAST.rama + "\n";
            ramaDeclarar += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
            ramaDeclarar += `${nodoIDPrincipal} -> ${codigoAST.nodo};\n`;
            return {rama:ramaDeclarar,nodo:nodoPrincipal};
        } else {
            let ramaDeclarar = `${nodoPrincipal}[label="Declarar"];\n`
            ramaDeclarar += `${nodoIDPrincipal}[label="${this.id.toString()}"];\n`;
            ramaDeclarar += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
            return {rama:ramaDeclarar,nodo:nodoPrincipal};
        }
    }
}
