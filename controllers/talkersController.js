const talkersService = require('../services/talkersService');

const getAll = async (req, res) => {
  try {
    const results = await talkersService.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAll,
  // getById,
  // add,
  // update,
  // exclude,
};