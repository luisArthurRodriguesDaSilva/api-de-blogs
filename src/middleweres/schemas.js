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

const categorieSchema = joi.object({
  name: joi.string().required(),
});

const postSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().min(1).required(),
});

module.exports = { loginSchema, newUserSchema, categorieSchema, postSchema };