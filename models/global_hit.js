'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Global_Hit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Global_Hit.init({
    rank: DataTypes.INTEGER,
    song: DataTypes.STRING,
    artist: DataTypes.STRING,
    plays: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Global_Hit',
  });
  return Global_Hit;
};