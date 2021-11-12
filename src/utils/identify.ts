import * as cocoSsd from '@tensorflow-models/coco-ssd';
import ToBuffer from './toBuffer';
import convertImage from './convertImage';
export default async function identifyParts(link: string): Promise<cocoSsd.DetectedObject[]> {
let _model = await cocoSsd.load();
let img = await convertImage( await ToBuffer(link));

return await _model.detect(img);


}