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
        return sequelize.query('SELECT "p"."id", "p"."description", "c"."name" as category, ST_AsGeoJSON("p"."location") as location FROM "point" AS p INNER JOIN "category_point" AS c on p.category_point_id = c.id WHERE ST_DWithin(location, ST_GeomFromGeoJSON(\'{\"type\":\"Point\", \"coordinates\":'+geom+'}\'), 0.50)', { type: sequelize.QueryTypes.SELECT});
      } 

    },

  	paranoid: true,
    freezeTableName: true,
    tableName: 'point',
    underscored: true
  });

  return Point;
};