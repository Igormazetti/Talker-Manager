const createToken = require('../services/createToken');

const tokenMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  const token = createToken(email, password);
  req.user = { token };
  next();
};

module.exports = tokenMiddleware;
