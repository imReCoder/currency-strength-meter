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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterController = void 0;
const responseHandler_1 = __importDefault(require("../../core/helpers/responseHandler"));
const meter_model_1 = __importDefault(require("./meter.model"));
class MeterController {
    addNewContact(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseHandler = new responseHandler_1.default();
            try {
                console.log("New Contact Add Request");
                responseHandler.reqRes(req, res).onFetch("CONTACTS_ADDED", yield meter_model_1.default.check()).send();
            }
            catch (e) {
                console.log(e);
                // send error with next function.
                next(responseHandler.sendError(e));
            }
        });
    }
}
exports.MeterController = MeterController;
exports.default = new MeterController();
//# sourceMappingURL=meter.controller.js.map