'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messageRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  messageRoom.init({
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'messageRoom',
  });
  return messageRoom;
};