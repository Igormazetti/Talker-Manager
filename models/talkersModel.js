const {
  readContentFile,
  writeContentFile,
  reWrite,
} = require('../helpers/readWrite');

const path = 'talker.json';

const getAll = async () => {
  const talkers = (await readContentFile(path));
  return talkers;
};

module.exports = {
  getAll,
};