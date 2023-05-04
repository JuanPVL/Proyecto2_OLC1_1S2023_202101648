import { Symbol } from "./Symbol";
export declare class Array {
    values: Symbol[];
    constructor();
    getAttribute(index: number): Symbol;
    setAttribute(index: number, value: Symbol): void;
}
