const talkersModel = require('../models/talkersModel');
const talkerCreationSchema = require('../schemas/talkerCreationSchema');

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

module.exports = { 
  getAll,
  getByName,
  getById,
  add,
};
