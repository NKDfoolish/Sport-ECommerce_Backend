'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class receipt_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  receipt_details.init({
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'receipt_details',
  });
  return receipt_details;
};