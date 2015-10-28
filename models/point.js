'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var Point = sequelize.define('Point', {
  	
  	description:{
  		type: DataTypes.STRING(60),
  		allowNull: false,
  		validade:{
  			isAlpha: true
  		}
  	},
    
  	location: {
      type:DataTypes.GEOMETRY(),
      allowNull:false,
      unique: true
    },
   
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

    instanceMethods:{
      findByLocation: function(coord){

      } 
    },

  	paranoid: true,
    freezeTableName: true,
    tableName: 'point',
    underscored: true
  });

  return Point;
};

/*
sequelize.query('SELECT * FROM projects WHERE status = ?',
  { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
).then(function(projects) {
  console.log(projects)
})

sequelize.query('SELECT * FROM projects WHERE status = :status ',
  { replacements: { status: 'active' }, type: sequelize.QueryTypes.SELECT }
).then(function(projects) {
  console.log(projects)
})
*/