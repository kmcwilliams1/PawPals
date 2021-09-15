const User = require('./User');
const Status = require('./Status');

User.hasMany(Status, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Status.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Status };