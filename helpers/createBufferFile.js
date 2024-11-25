import { Readable } from "stream";

const createBufferFile = (base64) => {
  Buffer.from(base64, 'base64');

  const stream = new Readable();
  stream._read = () => {};
  stream.push(buffer);
  stream.push(null);

  return stream;
};

export default createBufferFile;