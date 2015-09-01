'use strict';

var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  
  var User = sequelize.define('User', {
  	
  	full_name:{
  		type: DataTypes.STRING(60),
  		allowNull: false,
  		validade:{
  			isAlpha: true
  		}
  	},

  	email:{
  		type: DataTypes.STRING(80),
  		allowNull: false,
  		unique: true,
  		validate: {
  			isEmail: true
  		}
  	},

  	password: {
  		type: DataTypes.STRING(60),
  		allowNull: false,
      set: function(val){
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(val, salt);
        this.setDataValue('password', hash);
      }
  	},
 },

 {
    instanceMethods: {
      verifyPassword: function(password){
        return bcrypt.compareSync(password, this.password);
      }
    },
    
    classMethods: {
      associate:function(models){
        User.belongsTo(models.Role);
      }
    },

  	indexes: [
  		{
  		 unique: true,
      	 fields: ['email']
  		}
  	],

    paranoid: true,
    freezeTableName: true,
    tableName: 'user',
    underscored: true

});
  return User;
};