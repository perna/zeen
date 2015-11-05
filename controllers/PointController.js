'use strict';

var models = require('../models/');

exports.listPoints = function(req, res) {

    var points = models.Point;
    var category = models.CategoryPoint;

    points.findAll({include:[{all:true}]})
        .then(function(pts) {
            res.status(200).json(pts);
        })
        .error(function(err){
            res.status(500).json({message: err.message});
        });

};


exports.createPoint = function(req, res) {
    
    var point = models.Point;
    var lat = req.body.latitude;
    var lng = req.body.longitude;
    var location = [];
    location.push(lat);
    location.push(lng);

    var data  = { type: 'Point', coordinates: location };
    
    point.create({
            description: req.body.description,
            category_point_id: req.body.category,
            location: data
        })
        .then(function(pt){
            res.status(200).json({id: pt.id});
        })
        .error(function(err){
            res.json({message: err.message});
        });
};

exports.findPointsByLocation = function(req, res) {

    var point = models.Point.build({});
    var data = { type: 'Point', coordinates: [39.807222,-76.654723] };
    var geom = '['+ req.params['latitude']+ ','+ req.params['longitude']+']';
    

    point.findByLocation(geom)
        .then(function(data){
            res.json(data);
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