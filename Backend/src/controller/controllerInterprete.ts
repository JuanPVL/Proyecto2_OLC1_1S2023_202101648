import { Request,Response } from "express";
import { printList } from "./interprete/reports/PrintList";
import { Environment } from "./interprete/abstract/Environment";


class InterpreteController {

    //metodo ping
    public ping(req: Request, res: Response) {
        res.send("Pong interprete controller OLC1")
    }

    public interpretar(req: Request, res: Response) {
        var parser = require("./interprete/gramatica");

        const codigo = req.body.codigo;
        console.log(codigo);
        try {
            const ast = parser.parse(codigo);
            try {
                printList.splice(0,printList.length);
                const globalEnv = new Environment(null);
                for (const inst of ast) {
                    inst.execute(globalEnv);
                }
    
                res.json({consola: printList.join("\n"), errores:null});
            } catch (error) {
                console.log(error);
                res.json({
                    console:error,
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