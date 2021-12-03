const getFileName = (path) => {
  const fileSplit = path.split('\\');
  return fileSplit.pop();
};

const getFileExtension = (fileName) => {
  const extSplit = fileName.split('.');
  const fileExt = extSplit[1];
  return fileExt;
};

module.exports = {
  getFileName,
  getFileExtension,
};
