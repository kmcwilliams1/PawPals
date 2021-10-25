const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Message = require('./Message');

User.hasMany(Post, {
  foreignKey: 'userID',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'userID'
});

User.hasMany(Comment, {
  foreignKey: 'userID',
  onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
  foreignKey: 'userID'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment, Message};