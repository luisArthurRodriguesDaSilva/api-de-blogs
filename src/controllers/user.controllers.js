const { userServices } = require('../services');

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const { token, error, message } = await userServices.registerUser(email, password);
  if (error) return res.status(400).json({ message });
  return res.status(200).json({ token });
};

module.exports = { registerUser };