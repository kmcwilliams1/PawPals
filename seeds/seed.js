const sequelize = require('../config/connection');
// different second class may need to be changed 
const { User, Post, Message, Comment } = require('../models');
const commentData = require('./commentData.json');
const userData = require('./userData.json');
//will need to change the naming 
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const post = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  const comment = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();