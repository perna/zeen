'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var CategoryPoint = sequelize.define('CategoryPoint', {
  	
  	name:{
  		type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
      validade:{
        isAlpha: true
      }
  	}
  },

 {
    paranoid: true,
    freezeTableName: true,
    tableName: 'category_point',
    underscored: true
});

  return CategoryPoint;
};