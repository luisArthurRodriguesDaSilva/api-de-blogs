const { loginServices } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginServices.login(email, password);
  res.status(200).json({ token });
};

module.exports = { login };