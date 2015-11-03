'use strict';

module.exports = function(sequelize, DataTypes) {

  var Checkin = sequelize.define('Checkin', {

    score:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3,
      validate:{
        isNumeric:true,
        min:1,
        max:5
      }
    }
  },  
 
  {
    classMethods: {
      associate:function(models){
        Checkin.belongsTo(models.User);
        Checkin.belongsTo(models.Point);
      }
    },

  	paranoid: true,
    freezeTableName: true,
    tableName: 'checkin',
    underscored: true,
  });

  return Checkin;
};

