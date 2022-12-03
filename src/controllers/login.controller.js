const { loginServices } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { token, error, message } = await loginServices.login(email, password);
  if (error) return res.status(400).json({ message });
  return res.status(200).json({ token });
};

module.exports = { login };