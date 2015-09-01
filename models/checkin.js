'use strict';

module.exports = function(sequelize, DataTypes) {

  var Checkin = sequelize.define('Checkin', {

    stars:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3,
      validate:{
        isNumeric:true,
        min:1,
        max:5
      }
    },
 
    comment:{
      type: DataTypes.TEXT,
      allowNull: true,
      validate:{
        isApha: true
      }
    }
  },

  {
    classMethods: {
      associate:function(models){
        Checkin.belongsToMany(models.User, {through:'user_checkin'});
      }
    },

  	paranoid: true,
    freezeTableName: true,
    tableName: 'checkin',
    underscored: true,
  });

  return Checkin;
};

