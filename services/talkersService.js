const talkersModel = require('../models/talkersModel');

const getAll = async () => {
  const result = await talkersModel.getAll();
  if (!result) return [];
  return result;
};

module.exports = { 
  getAll,
};
