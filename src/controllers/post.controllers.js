const { postServices } = require('../services');

const postApost = async (req, res) => {
  const { user } = req;
  const post = req.body;
  const { newPost, error, message } = await postServices.postApost(post, user);
  if (error) return res.status(400).json({ message });
  return res.status(201).json(newPost);
};

const getAPost = async (req, res) => {
  const { id } = req.params;
  const post = await postServices.getApost(id);
  return res.status(200).json(post);
};

const getAllPosts = async (req, res) => {
  const posts = await postServices.getAllPosts();
  return res.status(200).json(posts);
};

module.exports = { postApost, getAPost, getAllPosts };