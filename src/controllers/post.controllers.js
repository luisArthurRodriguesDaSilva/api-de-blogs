const { postServices } = require('../services');

const postApost = async (req, res) => {
  const { user } = req;
  await postServices.postApost(user);
  res.status(200).json(user);
};

module.exports = { postApost };