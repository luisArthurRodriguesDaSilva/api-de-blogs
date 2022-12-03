const { generateToken } = require('../auth/jwtFuncs');
const { User } = require('../models');

const login = async (email, password) => {
  try {
    const user = await User.findOne({ where: { password, email } });
  if (user) {
    const token = await generateToken(email);
    return { token };
  }
  throw new Error('Invalid fields');  
} catch (err) {
    return { error: true, message: err.message };
  }
};

module.exports = {
  login,
};