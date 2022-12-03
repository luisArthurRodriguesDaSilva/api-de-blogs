const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().email({ tlds: { allow: false } }).required(),
  password: joi.string().min(5).required(),
});

module.exports = { loginSchema };