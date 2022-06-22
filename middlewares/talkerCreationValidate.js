const talkerCreationSchema = require('../schemas/talkerCreationSchema');

const talkerCreationValidate = (req, res, next) => {
  const { name, age, talk } = req.body;

  const { error } = talkerCreationSchema.validate({ name, talk });

  if (!age || age === null) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (age < 18) {
    return res
      .status(400)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  if (!error) return next();

  return res.status(400).json({ message: error.message });
};

module.exports = talkerCreationValidate;
