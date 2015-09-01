'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var Role = sequelize.define('Role', {
    
    name:{
        type: DataTypes.STRING(34),
        allowNull: false,
        unique: true,
        validade:{
            isAlpha: true
        }
    },
  
  },

  {
    classMethods: {
      associate:function(models){
        //Role.hasOne(models.User);
      }
    },

    paranoid: true,
    freezeTableName: true,
    tableName: 'role',
    underscored: true
  });

  return Role;
};

