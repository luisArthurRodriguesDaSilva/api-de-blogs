const { generateToken } = require('../auth/jwtFuncs');
const { User, BlogPost } = require('../models');

const attributes = ['id', 'displayName', 'email', 'image'];

const registerUser = async (user) => {
  try {
    const findedUser = await User.findOne({ attributes, where: { email: user.email } });
  if (findedUser) {
    throw new Error('User already registered');  
  }
  const newUser = await User.create(user);
  console.log(newUser);
  const token = await generateToken({ id: newUser.id });
  return { token };
} catch (err) {
    return { error: true, message: err.message };
  }
};

const getUser = async (id = false) => {
  try {
    const user = id 
  ? await User.findOne({ attributes, where: { id } })
  : await User.findAll({ attributes });
  if (!user) throw new Error('User does not exist');
    return { user };
  } catch (err) {
    return { error: true, message: err.message };
  }
};

const deleteMe = async (id) => {
  try {
    await BlogPost.destroy({ where: { userId: id } });
    await User.destroy({ where: { id } });
    return {};
  } catch (err) {
    return { error: true, message: err.message };
  }
};

module.exports = { registerUser, getUser, deleteMe };