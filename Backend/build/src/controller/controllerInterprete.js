"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpreteController = void 0;
const PrintList_1 = require("./interprete/reports/PrintList");
const Environment_1 = require("./interprete/abstract/Environment");
const TablaSimbolos_1 = require("./interprete/reports/TablaSimbolos");
const ErrorL_1 = require("./interprete/reports/ErrorL");
const Funcion_1 = require("./interprete/Instructions/Funcion");
const Declaration_1 = require("./interprete/Instructions/Declaration");
const Main_1 = require("./interprete/Instructions/Main");
class InterpreteController {
    //metodo ping
    ping(req, res) {
        res.send("Pong interprete controller OLC1");
    }
    interpretar(req, res) {
        var parser = require("./interprete/gramatica");
        ErrorL_1.ListaErrores.splice(0, ErrorL_1.ListaErrores.length);
        const codigo = req.body.codigo;
        console.log(codigo);
        try {
            const ast = parser.parse(codigo);
            try {
                PrintList_1.printList.splice(0, PrintList_1.printList.length);
                TablaSimbolos_1.ListaTabla.splice(0, TablaSimbolos_1.ListaTabla.length);
                ErrorL_1.ListaErroresS.splice(0, ErrorL_1.ListaErroresS.length);
                const globalEnv = new Environment_1.Environment(null, "Global");
                // for (const inst of ast) {
                //     inst.execute(globalEnv);
                // }
                for (const inst of ast) {
                    if (inst instanceof Declaration_1.Declaration) {
                        inst.execute(globalEnv);
                    }
                    else if (inst instanceof Funcion_1.Funcion) {
                        inst.execute(globalEnv);
                    }
                }
                for (const inst of ast) {
                    if (inst instanceof Main_1.InsMain) {
                        inst.execute(globalEnv);
                    }
                }
                let drawast = `
                digraph AST {
                    nodoPrincipal[label="AST"];\n
                `;
                for (const inst of ast) {
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
                for (const fila of TablaSimbolos_1.ListaTabla) {
                    if (!idsExistentes.has(fila.id)) {
                        tablaSimbol += `<tr><td>${fila.id}</td><td>${fila.tipo}</td><td>${fila.tipoPrimitivo}</td><td>${fila.entorno}</td><td>${fila.linea}</td><td>${fila.columna}</td></tr>\n`;
                        idsExistentes.add(fila.id);
                    }
                }
                tablaSimbol += `</table>>];\n}`;
                console.log(ErrorL_1.ListaErrores.length);
                let Errores = `digraph Errores {\n
                    parent [shape = none\n
                        label=<\n
                        <table border= '1' cellspacing="0">\n
                        <tr><td bgcolor="#FFD352">Tipo</td><td bgcolor="#FFD352">Descripcion</td><td bgcolor="#FFD352">Linea</td><td bgcolor="#FFD352">Columna</td></tr>\n`;
                for (const fila of ErrorL_1.ListaErrores) {
                    Errores += `<tr><td>${fila.tipo}</td><td>${fila.descripcion}</td><td>${fila.linea}</td><td>${fila.columna}</td></tr>\n`;
                }
                for (const fila of ErrorL_1.ListaErroresS) {
                    Errores += `<tr><td>${fila.tipo}</td><td>${fila.descripcion}</td><td>${fila.linea}</td><td>${fila.columna}</td></tr>\n`;
                }
                Errores += `</table>>];\n}`;
                for (const fila of ErrorL_1.ListaErrores) {
                    let errorString = `${fila.tipo} ${fila.descripcion} en linea ${fila.linea} columna ${fila.columna}`;
                    PrintList_1.printList.push(errorString);
                }
                for (const fila of ErrorL_1.ListaErroresS) {
                    let errorString = `${fila.tipo} ${fila.descripcion} en linea ${fila.linea} columna ${fila.columna}`;
                    PrintList_1.printList.push(errorString);
                }
                res.json({ consola: PrintList_1.printList.join("\n"), errores: Errores, ast: drawast, tablaSimbolos: tablaSimbol });
            }
            catch (error) {
                console.log(error);
                res.json({
                    consola: error,
                    errores: error,
                });
            }
        }
        catch (err) {
            console.log(err);
            res.json({
                consola: err,
                errores: err,
            });
        }
    }
}
exports.interpreteController = new InterpreteController();
