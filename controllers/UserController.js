'use strict';

var models = require('../models/');
var user = models.User;

exports.listUsers = function(req, res, next) {
  
  user
    .findAll({
      where: {
        deleted_at: null
      }
    })
    .then(function(users){
        res.json(users);
    })
    .error(function(err){
      res.json({message: err.message});
    });
};

exports.createUser = function(req, res, next) {

  user
    .create({
        full_name:req.body.full_name,
        email: req.body.email,
        password: req.body.password,
        role_id: req.body.role_id
    })
    .then(function(user){
        res.json(user);
    })
    .catch(function(err){
        res.json({message: err.message});
    });
};

exports.updateUser = function(req, res, next) {

  user.
    findById(req.params['id'])
      .then(function(u){
        if(typeof req.params['full_name'] !== "undefined"){
          user.full_name = req.params['full_name'];
        }
        if(typeof req.params['email'] !== "undefined")
          user.email = req.params['email'];
        if(typeof req.params['password'] !== "undefined")
          user.password = req.params['password'];
        user.save().then(function(){});
      })
       .catch(function(err){
          res.json({message: err.message});
       });

}