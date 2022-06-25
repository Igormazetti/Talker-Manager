const talkersModel = require('../models/talkersModel');

const getAll = async () => {
  const result = await talkersModel.getAll();
  if (!result) return [];
  return result;
};

const getByName = async (query) => {
  const result = await talkersModel.getByName(query);
  return result;
};

module.exports = { 
  getAll,
  getByName,
};
