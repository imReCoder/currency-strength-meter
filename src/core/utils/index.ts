import { Request, Response, NextFunction, Router } from 'express';

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;


export interface IRoute {
  path: string | string[];
  method: string;
  role?: string;
  escapeAuth?: boolean;
  adminOnly?: boolean;
  handler: Handler[];
}
export const applyRoutes = (router: Router, routes: IRoute[]) => {
  for (const route of routes) {
    const { method, path, escapeAuth, handler, adminOnly, role } = route;
    (router)[method](path, handler);
  }
  return router;
};
