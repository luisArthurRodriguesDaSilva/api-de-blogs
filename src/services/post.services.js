const { BlogPost, PostCategory } = require('../models');

const addBlogPost = async (userId, actDate, { title, content }) => {
  const newPost = (await BlogPost.create(
    {
      userId,
      published: actDate,
      updated: actDate,
      title,
      content,
    },
  )).dataValues;
  return newPost.id;
};

const addPostCategories = async (postId, post) => {
  Promise.all(post.categoryIds.map((categoryId) => (
    PostCategory.create({
      postId,
      categoryId,
    })
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
  // const t = await sequelize.transaction();
  try {
    const newPostId = await addBlogPost(userId, actDate, post);
    await addPostCategories(newPostId, post);
    const newPost = await getApost(newPostId);
    return newPost;
  } catch (err) {
    return { error: true, message: err.message };
  }
};

module.exports = {
  postApost,
  getApost,
};