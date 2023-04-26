"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllerInterprete_1 = require("../controller/controllerInterprete");
const router = express_1.default.Router();
router.get('/ping1', controllerInterprete_1.interpreteController.ping);
router.post('/interpretar', controllerInterprete_1.interpreteController.interpretar);
exports.default = router;
