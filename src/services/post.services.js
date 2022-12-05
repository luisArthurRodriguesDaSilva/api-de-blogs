const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const { BlogPost, PostCategory } = require('../models');

const addBlogPost = async (transaction, userId, actDate, { title, content }) => {
  const newPost = (await BlogPost.create(
    {
      userId,
      published: actDate,
      updated: actDate,
      title,
      content,
    },
    { transaction },
  )).dataValues;
  return newPost.id;
};

const addPostCategories = async (transaction, postId, post) => {
  Promise.all(post.categoryIds.map((categoryId) => (
    PostCategory.create({
      postId,
      categoryId,
    }, { transaction })
    )));
};

const getApost = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
  });
  return post;
};

const postApost = async (post, user) => {
  const userId = user.data;
  console.log('userId', userId);
  const actDate = new Date();
  const t = await sequelize.transaction();
  try {
    const newPostId = await addBlogPost(t, userId, actDate, post);
    await addPostCategories(t, newPostId, post);
    t.commit();
    const newPost = await getApost(newPostId);
    return newPost;
  } catch (err) {
    await t.rollback();
    return { error: true, message: err.message };
  }
};

module.exports = {
  postApost,
  getApost,
};