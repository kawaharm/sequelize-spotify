'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Most_Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Most_Follower.init({
    rank: DataTypes.INTEGER,
    artist: DataTypes.STRING,
    followers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Most_Follower',
  });
  return Most_Follower;
};