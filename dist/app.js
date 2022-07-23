"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// dotenv 
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const logger_1 = require("./core/helpers/logger");
const utils_1 = require("./core/utils");
const routes_1 = __importDefault(require("./components/routes"));
const app = (0, express_1.default)();
exports.app = app;
// public view
app.set('view engine', 'ejs');
// url encoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// json
app.use(body_parser_1.default.json());
app.use(logger_1.requestLogger);
//api router
const apiRouter = express_1.default.Router();
app.use('/api', (0, utils_1.applyRoutes)(apiRouter, routes_1.default));
app.get("/", (req, res) => {
    res.render("index");
});
// error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!<br>' + err.message);
});
app.all('*', (req, res) => {
    res.status(404).send('404 Not Found');
});
//# sourceMappingURL=app.js.map