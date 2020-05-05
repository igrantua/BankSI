'use strict';

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      roleName: DataTypes.STRING,
    },
    {},
  );
  // eslint-disable-next-line func-names
  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User, {
      through: 'UserRole',
      foreignKey: 'roleId',
      as: 'role',
    });
  };
  return Role;
};
