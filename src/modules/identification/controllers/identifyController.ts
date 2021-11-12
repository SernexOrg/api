import { Response } from "express";
import { Get, JsonController, QueryParam, Res } from "routing-controllers";
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import identify from '../../../utils/identify';
import ToBuffer from "../../../utils/toBuffer";
import createCanvasIdentification from "../../../utils/createCanvasIdentification";
@JsonController()
export class IdentifyController {

    @Get("/identify")
    async getStats(@QueryParam("link", { required: true, parse: true }) link: string, @Res() response: Response) {
      let result = await identify(link);
      let buffer = await ToBuffer(link);
       return await createCanvasIdentification(result, buffer);
    }
}