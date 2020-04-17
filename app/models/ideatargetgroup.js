'use strict';

module.exports = (sequelize, DataTypes) => {
  const IdeaTargetGroup = sequelize.define(
    'IdeaTargetGroup',
    {
      targetGroupId: DataTypes.INTEGER,
      ideaId: DataTypes.INTEGER,
    },
    {},
  );
  // eslint-disable-next-line func-names
  IdeaTargetGroup.associate = function(models) {
    // associations can be defined here
    IdeaTargetGroup.belongsTo(models.Idea, { foreignKey: 'ideaId' });
    IdeaTargetGroup.belongsTo(models.TargetGroup, { foreignKey: 'targetGroupId' });
  };
  return IdeaTargetGroup;
};
