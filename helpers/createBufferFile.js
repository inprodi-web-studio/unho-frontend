const createBufferFile = (base64) => {
  return Buffer.from(base64, 'base64');
};

export default createBufferFile;