const User = require('./User');
const Status = require('./Status');
const Comment = require('./Comment');
const Message = require('./Message');

User.hasMany(Status, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Status.hasMany(Comment, {
  foreignKey: 'status_id',
  onDelete: 'CASCADE'
})

Status.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Status, Comment, Message};