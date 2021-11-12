import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as canvas from 'canvas';
export default  async function (prediction: cocoSsd.DetectedObject[], image: Buffer) {
 const can = await canvas.createCanvas(1080, 1080);

 const ctx = can.getContext("2d");
 ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 const img = new canvas.Image();
 img.src = image;
  ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    const font = "18px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    prediction.forEach((prediction) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];

      ctx.strokeStyle = "#fc685b";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);

      ctx.fillStyle = "#fc685b";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10);
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    prediction.forEach((prediction) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];

      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(prediction.class, x, y);
    });

  return can.toBuffer();
}