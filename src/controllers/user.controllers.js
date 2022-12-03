const { userServices } = require('../services');

const registerUser = async (req, res) => {
  const user = req.body;
  const { token, error, message } = await userServices.registerUser(user);
  if (error) return res.status(409).json({ message });
  return res.status(201).json({ token });
};

module.exports = { registerUser };