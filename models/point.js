'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var Point = sequelize.define('Point', {
  	
  	description:{
  		type: DataTypes.STRING(60),
  		allowNull: false,
  		validate:{
  			notEmpty: true
  		}
  	},
    
  	location: {
      type:DataTypes.GEOMETRY(),
      allowNull:false,
      unique: true
    }
  },

  {
  	classMethods: {
  		associate: function(models) {
  			Point.hasMany(models.Checkin);
  		}
  	},

    instanceMethods:{
       findByLocation: function(geom){
        return sequelize.query('SELECT id, description, ST_AsGeoJSON(location) FROM point WHERE ST_DWithin(location, ST_GeomFromGeoJSON(\'{\"type\":\"Point\", \"coordinates\":'+geom+'}\'), 1000.00)', { type: sequelize.QueryTypes.SELECT});
      } 

    },

  	paranoid: true,
    freezeTableName: true,
    tableName: 'point',
    underscored: true
  });

  return Point;
};