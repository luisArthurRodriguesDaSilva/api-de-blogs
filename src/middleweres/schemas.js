const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().email({ tlds: { allow: false } }).required(),
  password: joi.string().min(6).required(),
});

const newUserSchema = joi.object({
  email: joi.string().email({ tlds: { allow: false } }).required(),
  password: joi.string().min(6).required(),
  displayName: joi.string().min(8).required(),
  image: joi.string().optional(),
});

module.exports = { loginSchema, newUserSchema };