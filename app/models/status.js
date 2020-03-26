'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    statusTitle: DataTypes.STRING
  }, {});
  Status.associate = function(models) {
    // associations can be defined here
    Status.belongsToMany(models.Idea, { through: 'IdeaStatuses', foreignKey: 'statusId'})
  };
  return Status;
};
