'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class delivery_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  delivery_types.init({
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'delivery_types',
  });
  return delivery_types;
};