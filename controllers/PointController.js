'use strict';

var models = require('../models/');

exports.listPoints = function(req, res) {

    var points = models.Point;

    points.findAll()
        .then(function(pts) {
            res.json(pts);
        })
        .error(function(err){
            res.json({message: err.message});
        });

};


exports.createPoint = function(req, res) {
    
    var point = models.Point;
    var loc = { type: 'Point', coordinates: req.body.location };
 
    point.create({
            description: req.body.description,
            category: req.body.category,
            location: loc
        })
        .then(function(pt){
            res.json({id: pt.id});
        })
        .error(function(err){
            res.json({message: err.message});
        });
};


exports.listCategories = function(req, res) {
    
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

exports.createCategory = function(req, res) {
    
    var categories = models.CategoryPoint;

    categories
        .create({
            name:req.body.name
        })
        .then(function(cat){
            res.json({id:cat.id});
        })
        .error(function(err){
            res.json({message: err.message});
        });
};