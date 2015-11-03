'use strict';

var models = require('../models/');
var User = models.User;

exports.listUsers = function(req, res, next) {
  
  User
    .findAll({
      where: {
        deleted_at: null
      }
    })
    .then(function(users){
        var data = JSON.stringify({id:users.id, full_name: users.full_name, email: users.email});
        res.json(data);
    })
    .error(function(err){
      res.json({message: err.message});
    });
};

exports.createUser = function(req, res, next) {
  console.log(req.body);
  console.log(req.params);
  User
    .create({
        full_name:req.body.full_name,
        email: req.body.email,
        password: req.body.password
    })
    .then(function(user){
        res.json(user);
    })
    .catch(function(err){
        res.json({message: err.message});
    });
};

exports.updateUser = function(req, res, next) {
  User.
    findById(req.params['id'])
      .then(function(user){
        if(req.body.full_name)
          user.full_name = req.body.full_name;
        if(req.body.email)
          user.email = req.body.email;
        if(req.body.password)
          user.password = req.body.password;
        user.save();
        res.json({message:'sucesso'});
      })
       .catch(function(err){
          res.json({message: err.message});
       });
}


exports.deleteUser = function(req, res, next) {
  User.
    findById(req.params['id'])
      .then(function(user){
        user.destroy()
          .then(function(){
            res.json({message:'sucesso'});
          });
      })
       .catch(function(err){
          res.json({message: err.message});
       });
}

