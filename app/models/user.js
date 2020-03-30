'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    avatar: DataTypes.BLOB
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Idea, { foreignKey: 'userId', sourceKey: 'id' });  // user - source, idea - foreign
    User.hasMany(models.Comment, { foreignKey: 'userId', sourceKey: 'id' });
  };
  return User;
};
