const { generateToken } = require('../auth/jwtFuncs');
const { User } = require('../models');

const attributes = ['id', 'displayName', 'email', 'image'];

const registerUser = async (user) => {
  try {
    const findedUser = await User.findOne({ attributes, where: { email: user.email } });
  if (findedUser) {
    throw new Error('User already registered');  
  }
  const newUser = await User.create(user);
  console.log(newUser);
  const token = await generateToken(user.email);
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
  if (!user) throw new Error('user not found');
    return { user };
  } catch (err) {
    return { error: true, message: err.message };
  }
};

module.exports = { registerUser, getUser };