module.exports.applyRoutes = (router,routes) => {
    for (const route of routes) {
      const {method, path, escapeAuth, handler, adminOnly, role} = route;
      (router)[method](path, handler);
    //   if (escapeAuth) {
    //   } else if (role) {
    //     (router)[method](path, [Authorization, RoleAuthorization(role), ...handler]);
    //   } else if (adminOnly) {
    //     (router)[method](path, [Authorization, AdminAuthorization, ...handler]);
    //   } else {
    //     (router)[method](path, [Authorization, ...handler]);
    //   }
    }
    return router;
  };
  