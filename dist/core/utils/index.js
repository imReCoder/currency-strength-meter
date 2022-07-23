"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRoutes = void 0;
const applyRoutes = (router, routes) => {
    for (const route of routes) {
        const { method, path, escapeAuth, handler, adminOnly, role } = route;
        (router)[method](path, handler);
    }
    return router;
};
exports.applyRoutes = applyRoutes;
//# sourceMappingURL=index.js.map