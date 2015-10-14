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
    
  	location: DataTypes.GEOMETRY('Point'),
   
    category_id:{
      type:DataTypes.INTEGER,
      references: {
        model: "category_point",
        key:"id"
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

