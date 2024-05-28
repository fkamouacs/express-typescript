"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use(express_1.default.json());
exports.app.get('/', (req, res) => res.send('Express on Vercel'));
exports.app.listen(3001, () => console.log(`Server running on port ${3001}`));
//# sourceMappingURL=index.js.map