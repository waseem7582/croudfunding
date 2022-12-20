'use strict';
module.exports = (sequelize, DataTypes) => {
  var currency = sequelize.define('currency', {
    country: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  currency.associate = function(models) {
    // associations can be defined here
  };
  return currency;
};