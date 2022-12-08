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

const deleteMe = async (req, res) => {
  const userId = Number(req.user.data.id); 
  console.log('🚀 ~ file: user.controllers.js:25 ~ deleteMe ~ userId', userId);
  const { error, message } = await userServices.deleteMe(userId);
  if (error) return res.status(500).json({ message });
  return res.status(204).json();
};

module.exports = { registerUser, getAllUsers, getUser, deleteMe };