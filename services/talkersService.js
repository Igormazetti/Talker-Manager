const talkersModel = require('../models/talkersModel');
const talkerCreationSchema = require('../schemas/talkerCreationSchema');
const {
  readContentFile,
} = require('../helpers/readWrite');

const path = 'talker.json';

const getAll = async () => {
  const result = await talkersModel.getAll();
  if (!result) return [];
  return result;
};

const getByName = async (query) => {
  const result = await talkersModel.getByName(query);
  return result;
};

const getById = async (id) => {
  const result = await talkersModel.getById(id);
  return result;
};

const add = async (speakerData) => {
  const { name, age, talk } = speakerData;

  const result = await talkersModel.add(speakerData);
  
  const { error } = talkerCreationSchema.validate({ name, talk });
  if (error) return { message: error.message };
  if (!age || age === null) {
    return { message: 'O campo "age" é obrigatório' };
  }

  if (speakerData.age < 18) return { message: 'A pessoa palestrante deve ser maior de idade' };

  return result;
};

const update = async (speakerId, speakerData) => {
  const { id } = speakerId;
  const talkers = await readContentFile(path);
  const verify = talkers.some((speaker) => speaker.id === Number(speakerId));
  if (!verify) return { message: 'Speaker not found' };
  const result = await talkersModel.update(id, speakerData);

  return result;
};

const exclude = async (speakerId) => {
 await talkersModel.exclude(speakerId);
};

module.exports = { 
  getAll,
  getByName,
  getById,
  add,
  update,
  exclude,
};
