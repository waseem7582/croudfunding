'use strict';
module.exports = (sequelize, DataTypes) => {
  var Owner = sequelize.define('Owner', {
    username: DataTypes.STRING,
    cryptowalletaddress: DataTypes.STRING
  }, {});
  Owner.associate = function(models) {
    // associations can be defined here
  };
  return Owner;
};