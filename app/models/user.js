'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.BLOB,
    },
    {
      hooks: {
        async beforeCreate(user) {
          const salt = await bcrypt.genSalt(10);
          // eslint-disable-next-line no-param-reassign
          user.password = await bcrypt.hash(user.password, salt);
        },
      },
    },
  );
  // eslint-disable-next-line func-names
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Idea, { foreignKey: 'userId', sourceKey: 'id' }); // user - source, idea - foreign
    User.hasMany(models.Comment, { foreignKey: 'userId', sourceKey: 'id' });
    User.belongsTo(models.Role, { foreignKey: 'roleId', targetKey: 'id' });
    // User.belongsToMany(models.Role, {
    //   through: 'UserRole',
    //   foreignKey: 'userId',
    //   as: 'user',
    // });
  };
  return User;
};
