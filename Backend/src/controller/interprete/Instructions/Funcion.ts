import { Instruction } from "../abstract/Instruction";
import { Environment } from "../abstract/Environment";
import { Expression } from "../abstract/Expression";
import { tipo } from "../abstract/Return";

export class Funcion extends Instruction{
    constructor(public tipo:tipo, private id:string, public parametros:Array<Expression>, public statement:Instruction, line:number, column:number){
        super(line, column);
    }

    public execute(env:Environment) {
        //save function in the environment
        env.guardarFuncion(this.id,this);
    }

    public drawAST(): { rama: string; nodo: string; } {
        if(this.tipo == tipo.VOID){
            const id = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoPrincipal = `nodoMetodo${id.toString()}`;
            let ramaFuncion = `${nodoPrincipal}[label="Metodo"];\n`
            const id2 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal = `nodoIDMet${id2.toString()}`;
            let nodovar = `${nodoIDPrincipal}[label="${tipo[this.tipo]}"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
            const id3 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal2 = `nodoID2Met${id3.toString()}`;
            nodovar = `${nodoIDPrincipal2}[label="${this.id}"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal2};\n`;
            const id4 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal3 = `nodoID3Met${id4.toString()}`;
            nodovar = `${nodoIDPrincipal3}[label="Parametros"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal3};\n`;
            for(let i = 0; i < this.parametros.length; i++){
                const codigoRamaParametros:{rama:string,nodo:string} = this.parametros[i].drawAST();
                ramaFuncion += codigoRamaParametros.rama 
                ramaFuncion += `${nodoIDPrincipal3} -> ${codigoRamaParametros.nodo};`;
            }
            const id5 = Math.floor(Math.random() * (999 - 0) + 0);
            const codeStat = `nodoStat${id5.toString()}`;
            let nodoStat = `${codeStat}[label="Statement"];\n`;
            ramaFuncion += nodoStat;
            ramaFuncion += `${nodoPrincipal} -> ${codeStat};\n`;
            const codigoRamaStat:{rama:string,nodo:string} = this.statement.drawAST();
            ramaFuncion += codigoRamaStat.rama;
            const extras = codigoRamaStat.nodo.split("nodo");
            for(let i = 1; i < extras.length; i++){
                ramaFuncion += `${codeStat} -> nodo${extras[i]};\n`;
            }
            return {rama:ramaFuncion,nodo:nodoPrincipal};
        } else {
            const id = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoPrincipal = `nodoFuncion${id.toString()}`;
            let ramaFuncion = `${nodoPrincipal}[label="Funcion"];\n`
            const id2 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal = `nodoIDF${id2.toString()}`;
            let nodovar = `${nodoIDPrincipal}[label="${tipo[this.tipo]}"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal};\n`;
            const id3 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal2 = `nodoID2F${id3.toString()}`;
            nodovar = `${nodoIDPrincipal2}[label="${this.id}"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal2};\n`;
            const id4 = Math.floor(Math.random() * (999 - 0) + 0);
            const nodoIDPrincipal3 = `nodoID3F${id4.toString()}`;
            nodovar = `${nodoIDPrincipal3}[label="Parametros"];\n`;
            ramaFuncion += nodovar;
            ramaFuncion += `${nodoPrincipal} -> ${nodoIDPrincipal3};\n`;
            for(let i = 0; i < this.parametros.length; i++){
                const codigoRamaParametros:{rama:string,nodo:string} = this.parametros[i].drawAST();
                ramaFuncion += codigoRamaParametros.rama 
                ramaFuncion += `${nodoIDPrincipal3} -> ${codigoRamaParametros.nodo};`;
            }
            const id5 = Math.floor(Math.random() * (999 - 0) + 0);
            const codeStat = `nodoStat${id5.toString()}`;
            let nodoStat = `${codeStat}[label="Statement"];\n`;
            ramaFuncion += nodoStat;
            ramaFuncion += `${nodoPrincipal} -> ${codeStat};\n`;
            const codigoRamaStat:{rama:string,nodo:string} = this.statement.drawAST();
            ramaFuncion += codigoRamaStat.rama;
            const extras = codigoRamaStat.nodo.split("nodo");
            for(let i = 1; i < extras.length; i++){
                ramaFuncion += `${codeStat} -> nodo${extras[i]};\n`;
            }
            return {rama:ramaFuncion,nodo:nodoPrincipal};
        }
    }
}