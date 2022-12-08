const { 
  loginSchema, 
  newUserSchema, categorieSchema, postSchema, editedPostSchema } = require('./schemas');
const { categoriesServices, postServices } = require('../services');

const getBiggest = (arraio) => arraio.sort((a, b) => b - a)[0];

const validateloginFormat = async (req, res, next) => { 
  const { error } = await loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  next();
};

const validateUserFormat = async (req, res, next) => {
  const { error } = await newUserSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

const validateCategorieFormat = async (req, res, next) => {
  const { error } = await categorieSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

const validatePostFormat = async (req, res, next) => {
  const { error } = await postSchema.validate(req.body);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  next();
};

const validateEditedPostFormat = async (req, res, next) => {
  const { error } = await editedPostSchema.validate(req.body);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  next();
};

const validateIfCategorieExist = async (req, res, next) => {
  const { categoryIds } = req.body;
  const existedCategories = await categoriesServices.getCategories();
  const biggestId = getBiggest(categoryIds);
  if (existedCategories.length < biggestId) {
 return res.status(400).json(
    { message: 'one or more "categoryIds" not found' },
    ); 
}
  return next();
};

const validateIfCanEdit = async (req, res, next) => {
  try {
    const { user } = req;
  const { id } = req.params;
  const { post } = await postServices.getApost(id);
  if (post.user.id === user.data.id) return next();
  return res.status(401).json({ message: 'Unauthorized user' });
  } catch (err) {
    return res.status(404).json({
      message: 'Post does not exist',
    });
  }
};

const validateIfThisPostExist = async (req, res, next) => {
  const { id } = req.params;
  const { posts } = await postServices.getAllPosts();
  console.log('🚀 ~ file: validations.js:62 ~ validateIfThisPostExist ~ Number(id)', Number(id));
  console.log('🚀 ~ file: validations.js:62 ~ validateIfThisPostExist ~ posts.length', posts.length);
  if (posts.length < Number(id)) return res.status(404).json({ message: 'Post does not exist' });
  return next();
};

module.exports = { 
  validateloginFormat, 
  validateUserFormat, 
  validateCategorieFormat, 
  validatePostFormat,
  validateIfCategorieExist,
  validateIfCanEdit,
  validateEditedPostFormat,
  validateIfThisPostExist,
 };
