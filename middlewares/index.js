const tokenMiddleware = require('./tokenMiddleware');
const loginValidation = require('./loginValidation');
const talkerCreationValidate = require('./talkerCreationValidate');
const validateToken = require('./validateToken');

module.exports = {
  tokenMiddleware,
  loginValidation,
  talkerCreationValidate,
  validateToken,
};
