"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tablaModulo = exports.tablaPotencia = exports.tablaDivision = exports.tablaMultiplicacion = exports.tablaResta = exports.tablaSuma = void 0;
const Return_1 = require("../abstract/Return");
exports.tablaSuma = [
    [Return_1.tipo.INT, Return_1.tipo.DOUBLE, Return_1.tipo.INT, Return_1.tipo.INT, Return_1.tipo.STRING],
    [Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.STRING],
    [Return_1.tipo.INT, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.STRING],
    [Return_1.tipo.INT, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.STRING, Return_1.tipo.STRING],
    [Return_1.tipo.STRING, Return_1.tipo.STRING, Return_1.tipo.STRING, Return_1.tipo.STRING, Return_1.tipo.STRING]
];
exports.tablaResta = [
    [Return_1.tipo.INT, Return_1.tipo.DOUBLE, Return_1.tipo.INT, Return_1.tipo.INT, Return_1.tipo.NULL],
    [Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.NULL],
    [Return_1.tipo.INT, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.INT, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL]
];
exports.tablaMultiplicacion = [
    [Return_1.tipo.INT, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.INT, Return_1.tipo.NULL],
    [Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.DOUBLE, Return_1.tipo.NULL],
    [Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.INT, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL]
];
exports.tablaDivision = [
    [Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.DOUBLE, Return_1.tipo.NULL],
    [Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.DOUBLE, Return_1.tipo.NULL],
    [Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL]
];
exports.tablaPotencia = [
    [Return_1.tipo.INT, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL]
];
exports.tablaModulo = [
    [Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.DOUBLE, Return_1.tipo.DOUBLE, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL],
    [Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL, Return_1.tipo.NULL]
];
