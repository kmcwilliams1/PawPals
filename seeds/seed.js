const sequelize = require('../config/connection');
// different second class may need to be changed 
const { User, Post, Message, Comment } = require('../models');

const userData = require('./userData.json');
//will need to change the naming 
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //need to replace variable names and class name
  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();