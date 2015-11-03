'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var Comment = sequelize.define('Comment', {
    
    content:{
        type: DataTypes.STRING(60),
        allowNull: false,
        defautValue: ''     
    },

  },

 {  
    classMethods: {
        associate: function(models) {
            Comment.belongsTo(models.User);
            Comment.belongsTo(models.Point);
        }
    },

    paranoid: true,
    freezeTableName: true,
    tableName: 'comment',
    underscored: true

});
  return Comment;
};