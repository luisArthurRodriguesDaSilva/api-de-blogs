const { generateToken } = require('../auth/jwtFuncs');
const { User } = require('../models');

const registerUser = async (user) => {
  try {
    const findedUser = await User.findOne({ where: { email: user.email } });
  if (findedUser) {
    throw new Error('User already registered');  
  }
  const newUser = await User.create({ displayName: user.displayName, ...user });
  console.log(newUser);
  const token = await generateToken(user.email);
  return { token };
} catch (err) {
    return { error: true, message: err.message };
  }
};

module.exports = { registerUser };