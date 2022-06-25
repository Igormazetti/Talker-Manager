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

const add = async (req, res) => {
  try {
    const data = req.body;
    const results = await talkersService.add(data);
    return res.status(201).json(results);
  } catch (err) {
    console.error(err);
  }
};

const update = async (req, res) => {
  try {
    const speakerId = req.params;
    // console.log(speakerId);
    const speakerData = req.body;
    // console.log(speakerData);
    const results = await talkersService.update(speakerId, speakerData);
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
  }
};

const exclude = async (req, res) => {
  try {
    const id = req.params;
    await talkersService.exclude(id);
    res.status(204).end();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  getByName,
  getById,
  add,
  update,
  exclude,
};