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
        u.full_name = "Gabriel Tee";
        u.save();
        res.json(u);
      })
       .catch(function(err){
          res.json({message: err.message});
       });

}