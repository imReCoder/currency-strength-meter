"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http_1 = require("http");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: "./config.env" });
// // Create http server [non ssl]
const Port = process.env.PORT ? +process.env.PORT : 8000;
const server = (0, http_1.createServer)(app_1.app);
server.listen(Port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.info(`Listening on http://localhost:${Port}`);
}));
//# sourceMappingURL=server.js.map