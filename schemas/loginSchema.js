const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .messages({
      'any.required': 'O campo "email" é obrigatório',
      'string.email': 'O "email" deve ter o formato "email@email.com"',
    }),
  password: Joi.string().required().min(6).messages({
    'string.min': 'O "password" deve ter pelo menos 6 caracteres',
    'any.required': 'O campo "password" é obrigatório',
  }),
});

module.exports = loginSchema;
