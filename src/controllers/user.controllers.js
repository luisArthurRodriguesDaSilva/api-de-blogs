const { userServices } = require('../services');

const registerUser = async (req, res) => {
  const user = req.body;
  const { token, error, message } = await userServices.registerUser(user);
  if (error) return res.status(409).json({ message });
  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const { user, error, message } = await userServices.getUser();
  if (error) return res.status(401).json({ message });
  return res.status(200).json(user);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const { user, error, message } = await userServices.getUser(id);
  if (error) return res.status(404).json({ message });
  return res.status(200).json(user);
};

module.exports = { registerUser, getAllUsers, getUser };