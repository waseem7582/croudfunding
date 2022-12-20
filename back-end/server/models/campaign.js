'use strict';
module.exports = (sequelize, DataTypes) => {
  var campaign = sequelize.define('campaign', {
    ownerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    discriptions: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    expiration_date: DataTypes.DATE,
    status: DataTypes.STRING,
    received_amount: DataTypes.FLOAT
  }, {});
  campaign.associate = function(models) {
    // associations can be defined here
  };
  return campaign;
};