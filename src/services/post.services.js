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
  console.log('newpost');
  return newPost.id;
};

const addPostCategories = async (postId, post) => {
  const ids = await Promise.all(
    post.categoryIds.map(async (categoryId) => {
      console.log('categoryId', categoryId);
      await PostCategory.create({ postId, categoryId });
    }),
);
    return ids;
};

const getApost = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
  });
  return post;
};

const postApost = async (post, user) => {
  const userId = user.data.id;
  console.log('userId', userId);
  const actDate = new Date();
  // const t = await sequelize.transaction();
  try {
    console.log('passei aqui 1');
    const newPostId = await addBlogPost(userId, actDate, post);
    
    console.log('passei aqui 2');
    await addPostCategories(newPostId, post);

    console.log('passei aqui 3');
    const newPost = await getApost(newPostId);

    console.log('passei aqui 4');
    return { newPost };
  } catch (err) {
    console.log(err.message);
    return { error: true, message: err.message };
  }
};

module.exports = {
  postApost,
  getApost,
};