"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const interprete_1 = __importDefault(require("./routes/interprete"));
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
const PORT = 5000;
// app.get('/ping', (req,res) => {
//     console.log('compiladores 1 si sale');
//     res.send('pongCompiladores1')
// });
app.use('/interprete', interprete_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
