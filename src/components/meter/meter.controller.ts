import { Request, Response, NextFunction } from 'express';
import ResponseHandler from '../../core/helpers/responseHandler';
import meterModel from './meter.model';

export class MeterController {
    public async addNewContact(req: Request, res: Response, next: NextFunction) {
        const responseHandler = new ResponseHandler();
        try {
            console.log("New Contact Add Request");
            responseHandler.reqRes(req, res).onFetch("CONTACTS_ADDED", await meterModel.check()).send();
        } catch (e) {
            console.log(e);

            // send error with next function.
            next(responseHandler.sendError(e));
        }
    }

}

export default new MeterController();