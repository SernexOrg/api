import axios from 'axios';


export default async function ToBuffer(link: string): Promise<Buffer> {
  const res = await axios.get(link, { responseType: 'arraybuffer' });
  return Buffer.from(res.data, "utf-8");
}