'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    statusTitle: DataTypes.STRING
  }, {});
  Status.associate = function(models) {
    // associations can be defined here
    Status.belongsTo(models.Idea, { foreignKey: 'ideaId', targetKey: 'id'});
  };
  return Status;
};
