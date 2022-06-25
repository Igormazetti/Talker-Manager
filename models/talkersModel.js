const {
  readContentFile,
  // writeContentFile,
  // reWrite,
} = require('../helpers/readWrite');

const path = 'talker.json';

const getAll = async () => {
  const talkers = (await readContentFile(path));
  return talkers;
};

const getByName = async (query) => {
  const talkers = await readContentFile(path);

  if (!query || query === '') return talkers;

  const findTalker = talkers.filter((talker) => 
  talker.name.toLowerCase().includes(query.toLowerCase()));

  return findTalker;
};

const getById = async (id) => {
  const talkers = await readContentFile(path);
  const findTalker = talkers.find((talker) => talker.id === Number(id));
  return findTalker;
};

module.exports = {
  getAll,
  getByName,
  getById,
};