'use strict';

var models = require('../models/');

exports.listComments= function(req, res) {

    var point = models.Point;
    var comments = models.Comment;

    comments.findAll({
            include: [ User ],
            where:{point_id: req.params['id']}
        })
        .then(function(result){
            res.json(result);
        })
        .error(function(err){
            res.json({message: err.message});
        });

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
    var data  = { type: 'Point', coordinates: JSON.parse(req.body.location) };
    
    point.create({
            description: req.body.description,
            category_id: req.body.category,
            location: data
        })
        .then(function(pt){
            res.json({id: pt.id});
        })
        .error(function(err){
            res.json({message: err.message});
        });
};

exports.findPointByLocation = function(req, res) {

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