'use strict';

module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    'Status',
    {
      statusTitle: DataTypes.STRING,
    },
    {},
  );
  // eslint-disable-next-line func-names
  Status.associate = function(models) {
    // associations can be defined here
    Status.belongsTo(models.Idea, { foreignKey: 'id', targetKey: 'statusId' });
  };
  return Status;
};
