const { postServices } = require('../services');

const postApost = async (req, res) => {
  const { user } = req;
  const post = req.body;
  const resp = await postServices.postApost(post, user);
  res.status(200).json(resp);
};

const getAPost = async (req, res) => {
  const { id } = req.params;
  const post = await postServices.getApost(id);
  return res.status(200).json(post);
};

module.exports = { postApost, getAPost };