'use strict';

var models = require('../models/');

exports.index = function(req, res, next) {
    res.send('pontos');
};

exports.listCategories = function(req, res, next) {
    
    var categories = models.CategoryPoint;

    categories
        .findAll()
        .then(function(cat){
            res.json(cat);
        })
    .error(function(err){
      res.json({message: err.message});
    });
};

exports.createCategory = function(req, res, next) {
    
    var categories = models.CategoryPoint;

    categories
        .create({
            name:req.body.name
        })
        .then(function(user){
            res.json(user);
        })
        .error(function(err){
            res.json({message: err.message});
        });
};