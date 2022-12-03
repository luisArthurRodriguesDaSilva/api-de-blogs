const { generateToken } = require('../auth/jwtFuncs');
const { User } = require('../models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { password, email } });
  console.log('user');
  console.log(user);
  const token = await generateToken(email);
  return token;
};

module.exports = {
  login,
};