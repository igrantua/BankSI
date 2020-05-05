'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define(
    'UserRole',
    {
      userId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
    },
    {},
  );
  // eslint-disable-next-line func-names
  UserRole.associate = function(models) {
    // associations can be defined here
    UserRole.belongsTo(models.User, { foreignKey: 'userId' });
    UserRole.belongsTo(models.Role, { foreignKey: 'roleId' });
  };
  return UserRole;
};
