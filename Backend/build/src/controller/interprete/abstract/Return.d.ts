export declare enum tipo {
    INT = 0,
    DOUBLE = 1,
    BOOLEAN = 2,
    CHAR = 3,
    STRING = 4,
    NULL = 5,
    VOID = 6,
    ARRAY = 7,
    RETURN = 8,
    BREAK = 9,
    CONTINUE = 10
}
export type Return = {
    value: any;
    type: tipo;
};
