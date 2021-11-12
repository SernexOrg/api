import * as tf from '@tensorflow/tfjs-node';
import jpeg from 'jpeg-js';

export default async function convertImage(img: jpeg.BufferLike): Promise<tf.Tensor3D> {
    const image = await jpeg.decode(img, { useTArray: true })

    const numChannels = 3
    const numPixels = image.width * image.height
    const values = new Int32Array(numPixels * numChannels)
  
    for (let i = 0; i < numPixels; i++)
      for (let c = 0; c < numChannels; ++c)
        values[i * numChannels + c] = image.data[i * 4 + c]
  
    return tf.tensor3d(values, [image.height, image.width, numChannels], 'int32')
}