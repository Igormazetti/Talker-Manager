const talkersService = require('../services/talkersService');

const getAll = async (_req, res) => {
  try {
    const results = await talkersService.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
  }
};

const getByName = async (req, res) => {
  try {
    const { q } = req.query;
    const results = await talkersService.getByName(q);
    return res.status(200).json(results);
  } catch (err) {
    console.error(err);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await talkersService.getById(id);
    if (!results) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    res.status(200).json(results); 
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAll,
  getByName,
  getById,
  // update,
  // exclude,
};