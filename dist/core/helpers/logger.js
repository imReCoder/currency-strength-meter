"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = void 0;
const requestLogger = (req, res, next) => {
    //details of the request with timestamp
    console.warn(`==> ${new Date().toLocaleString()} ${req.method} ${req.url} `);
    next();
};
exports.requestLogger = requestLogger;
//# sourceMappingURL=logger.js.map