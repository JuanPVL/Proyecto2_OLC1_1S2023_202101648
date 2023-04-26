"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpreteController = void 0;
const PrintList_1 = require("./interprete/reports/PrintList");
const Environment_1 = require("./interprete/abstract/Environment");
class InterpreteController {
    //metodo ping
    ping(req, res) {
        res.send("Pong interprete controller OLC1");
    }
    interpretar(req, res) {
        var parser = require("./interprete/gramatica");
        const codigo = req.body.codigo;
        console.log(codigo);
        try {
            const ast = parser.parse(codigo);
            try {
                PrintList_1.printList.splice(0, PrintList_1.printList.length);
                const globalEnv = new Environment_1.Environment(null);
                for (const inst of ast) {
                    inst.execute(globalEnv);
                }
                res.json({ consola: PrintList_1.printList.join("\n"), errores: null });
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
