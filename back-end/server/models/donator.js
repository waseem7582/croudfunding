'use strict';
module.exports = (sequelize, DataTypes) => {
  var donator = sequelize.define('donator', {
    campaignId: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    state: DataTypes.STRING
  }, {});
  donator.associate = function(models) {
    // donator.hasMany(models.campaign);
  };
  return donator;
};