import convert from './convertImage';
import toBuffer from './toBuffer';
import * as nsfw from 'nsfwjs';
export default async function nsfwDetection(link: string, guesses?: number): Promise<nsfw.predictionType[]> {
let _model = await nsfw.load();

const buff = await toBuffer(link);
const img3D = await convert(buff);

const predictions = _model.classify(img3D, guesses ?? 1);

img3D.dispose();

return predictions;
}


