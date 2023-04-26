"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InWhile = void 0;
const Instruction_1 = require("../abstract/Instruction");
const Environment_1 = require("../abstract/Environment");
class InWhile extends Instruction_1.Instruction {
    constructor(condition, statement, line, column) {
        super(line, column);
        this.condition = condition;
        this.statement = statement;
    }
    execute(env) {
        let valorR = this.condition.execute(env);
        let envWhile = new Environment_1.Environment(env);
        while (valorR.value) {
            this.statement.execute(envWhile);
            valorR = this.condition.execute(envWhile);
        }
    }
}
exports.InWhile = InWhile;
