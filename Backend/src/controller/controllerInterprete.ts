import { Request,Response } from "express";
import { printList } from "./interprete/reports/PrintList";
import { Environment } from "./interprete/abstract/Environment";
import { ListaTabla } from "./interprete/reports/TablaSimbolos";
import { ListaErrores, ListaErroresS } from "./interprete/reports/ErrorL";
import { Funcion } from "./interprete/Instructions/Funcion";
import { Declaration } from "./interprete/Instructions/Declaration";
import { InsMain } from "./interprete/Instructions/Main";


class InterpreteController {

    //metodo ping
    public ping(req: Request, res: Response) {
        res.send("Pong interprete controller OLC1")
    }

    public interpretar(req: Request, res: Response) {
        var parser = require("./interprete/gramatica");
        ListaErrores.splice(0,ListaErrores.length);
        const codigo = req.body.codigo;
        console.log(codigo);
        try {
            const ast = parser.parse(codigo);
            try {
                printList.splice(0,printList.length);
                ListaTabla.splice(0,ListaTabla.length);
                ListaErroresS.splice(0,ListaErroresS.length);
                const globalEnv = new Environment(null,"Global");
                // for (const inst of ast) {
                //     inst.execute(globalEnv);
                // }
                    for(const inst of ast){
                        if(inst instanceof Declaration){
                            inst.execute(globalEnv);
                        } else if(inst instanceof Funcion){
                            inst.execute(globalEnv);
                        }
                    }
                    for(const inst of ast){
                        if(inst instanceof InsMain){
                            inst.execute(globalEnv);
                        } 
                    }
                let drawast = `
                digraph AST {
                    nodoPrincipal[label="AST"];\n
                `;
                for(const inst of ast){
                    const dAST = inst.drawAST();
                    drawast += `${dAST.rama}\n`;
                    drawast += `nodoPrincipal -> ${dAST.nodo};`;
                }

                drawast += "\n}";

                let tablaSimbol = `digraph TablaSimbolos {\n
                    parent [shape = none\n
                    label=<\n
                    <table border= '1' cellspacing="0">\n
                    <tr><td bgcolor="#FFD352">Identificador</td><td bgcolor="#FFD352">Tipo</td><td bgcolor="#FFD352">Tipo</td><td bgcolor="#FFD352">Entorno</td><td bgcolor="#FFD352">Linea</td><td bgcolor="#FFD352">Columna</td></tr>\n`;
                    const idsExistentes = new Set();
                    for(const fila of ListaTabla){
                        if(!idsExistentes.has(fila.id)){
                            tablaSimbol += `<tr><td>${fila.id}</td><td>${fila.tipo}</td><td>${fila.tipoPrimitivo}</td><td>${fila.entorno}</td><td>${fila.linea}</td><td>${fila.columna}</td></tr>\n`;
                            idsExistentes.add(fila.id);
                        }
                    }
                    tablaSimbol += `</table>>];\n}`;
                    console.log(ListaErrores.length)
                let Errores = `digraph Errores {\n
                    parent [shape = none\n
                        label=<\n
                        <table border= '1' cellspacing="0">\n
                        <tr><td bgcolor="#FFD352">Tipo</td><td bgcolor="#FFD352">Descripcion</td><td bgcolor="#FFD352">Linea</td><td bgcolor="#FFD352">Columna</td></tr>\n`;
                        for(const fila of ListaErrores){
                            Errores += `<tr><td>${fila.tipo}</td><td>${fila.descripcion}</td><td>${fila.linea}</td><td>${fila.columna}</td></tr>\n`;
                        }
                        for(const fila of ListaErroresS){
                            Errores += `<tr><td>${fila.tipo}</td><td>${fila.descripcion}</td><td>${fila.linea}</td><td>${fila.columna}</td></tr>\n`;
                        }
                        Errores += `</table>>];\n}`;
                        for (const fila of ListaErrores){
                            let errorString = `${fila.tipo} ${fila.descripcion} en linea ${fila.linea} columna ${fila.columna}`;
                            printList.push(errorString);
                        }
                        for (const fila of ListaErroresS){
                            let errorString = `${fila.tipo} ${fila.descripcion} en linea ${fila.linea} columna ${fila.columna}`;
                            printList.push(errorString);
                        }
                res.json({consola: printList.join("\n"), errores:Errores, ast: drawast, tablaSimbolos: tablaSimbol});
            } catch (error) {
                console.log(error);
                res.json({
                    consola:error,
                    errores: error,
                });
            }
            

        } catch (err) {
            console.log(err);
            res.json({
                consola: err,
                errores: err,
            });
        }
    }
}

export const interpreteController = new InterpreteController();