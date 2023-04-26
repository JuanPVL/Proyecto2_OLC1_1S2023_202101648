import { Request, Response } from "express";
declare class InterpreteController {
    ping(req: Request, res: Response): void;
    interpretar(req: Request, res: Response): void;
}
export declare const interpreteController: InterpreteController;
export {};
