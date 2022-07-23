import { Request, Response, NextFunction, Router } from 'express';
declare type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;
export interface IRoute {
    path: string | string[];
    method: string;
    role?: string;
    escapeAuth?: boolean;
    adminOnly?: boolean;
    handler: Handler[];
}
export declare const applyRoutes: (router: Router, routes: IRoute[]) => Router;
export {};
