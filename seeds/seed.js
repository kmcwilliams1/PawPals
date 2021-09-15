const sequelize = require('../config/connection');
// different second class may need to be changed 
const { User, Blog } = require('../models');

const userData = require('./userData.json');
//will need to change the naming 
const blogData = require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //need to replace variable names and class name
  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();