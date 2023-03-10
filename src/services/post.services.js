const { Op } = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');

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
  try {
    const post = (await BlogPost.findAll({
    include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    }, 
    {
      model: Category, as: 'categories', attributes: { exclude: [] },
    }, // parte do problema
    ],
    where: { id },
  }))[0];
  return { post };
} catch (err) {
  return { error: true, message: err.message };
  }
};

const getAllPosts = async () => {
  try {
    const posts = await BlogPost.findAll({
    include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    }, 
    {
      model: Category, as: 'categories', attributes: { exclude: [] },
    }, // parte do problema
  ],
  });
  return { posts };
} catch (err) {
  return { error: true, message: err.message };
}
};

const editPost = async (edits, id) => {
  try {
 await BlogPost.update({
      ...edits,
    }, { where: { id } }); 
    return {};
  } catch (err) {
    return { error: true, message: err.message };
  }
};

const postApost = async (post, user) => {
  const userId = user.data.id;
  const actDate = new Date();
  try {
    const newPostId = await addBlogPost(userId, actDate, post);
    await addPostCategories(newPostId, post);
    const newPost = await getApost(newPostId);
    return { newPost };
  } catch (err) {
    console.log(err.message);
    return { error: true, message: err.message };
  }
};

const searchPosts = async (searched) => {
  try {
    const searchedPosts = await BlogPost.findAll({
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', attributes: { exclude: [] } }, // parte do problema
      ],
      where: {
        [Op.or]: {
          title: {
            [Op.like]: `%${searched}%`,
          },
          content: {
            [Op.like]: `%${searched}%`,
          },
        },
      },
    });
    return { searchedPosts };
  } catch (err) { return { error: true, message: err.message }; }
};

const deleteApost = async (id) => {
  try {
    await BlogPost.destroy({
    where: { id },
});
return {};
  } catch (err) {
    return { error: true, message: err.message };
  }
};

module.exports = {
  postApost,
  getApost,
  getAllPosts,
  editPost,
  deleteApost,
  searchPosts,
};