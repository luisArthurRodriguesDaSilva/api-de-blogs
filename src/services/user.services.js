const { generateToken } = require('../auth/jwtFuncs');
const { User } = require('../models');

const registerUser = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
  if (user) {
    throw new Error('User already registered');  
  }
  const token = await generateToken(email);
  return { token };
} catch (err) {
    return { error: true, message: err.message };
  }
};

module.exports = { registerUser };