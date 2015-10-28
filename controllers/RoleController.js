'use strict';

var models = require('../models/');
var role = models.Role;

exports.listRoles = function(req, res, next) {

    role
        .findAll()
        .then(function(roles){
            res.json(roles);
        })
    .error(function(err){
      res.json({message: err.message});
    });
};

exports.createRole = function(req, res, next) {

    role
        .create({
            name:req.body.name
        })
        .then(function(role){
            res.json(role);
        })
        .error(function(err){
            res.json({message: err.message});
        });
};

exports.updateRole = function(req, res, next) {
    role
        .findById(req.params['id'])
        .then(function(roles){
            roles.name = req.body.name;
            roles.save();
            res.json({message:'sucesso'});
        })
        .catch(function(err){
              res.json({message: err.message});
        });
};