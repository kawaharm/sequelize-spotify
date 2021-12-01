'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Most_Monthly_Listener extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Most_Monthly_Listener.init({
    rank: DataTypes.INTEGER,
    artist: DataTypes.STRING,
    monthly_listener: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Most_Monthly_Listener',
  });
  return Most_Monthly_Listener;
};