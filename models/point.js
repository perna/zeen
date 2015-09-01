'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var Point = sequelize.define('Point', {
  	
  	description:{
  		type: DataTypes.STRING(60),
  		allowNull: false,
  		unique: true,
  		validade:{
  			isAlpha: true
  		}
  	},

  	location:{
  		type:DataTypes.STRING(20),
  		allowNull: false,
  		validate:{
  			isAlpha: true
  		}
  	}
  
  },

  {
  	classMethods: {
  		associate: function(models) {
  			Point.hasMany(models.Checkin);
  		}
  	},
  	paranoid: true,
    freezeTableName: true,
    tableName: 'point',
    underscored: true
  });

  return Point;
};

