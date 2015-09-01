'use strict';

var models = require('../models/');
var jwt    = require('jsonwebtoken');

exports.authenticate = function(req, res, next) {
    
    var user = models.User;

    user.findById(req.body.id)
        .then(function(user) {
            if(!user) {
                res.json({sucess:false, message:" User not found"});
            } else if(user){
                if(user.verifyPassword(req.body.password)) {
                    var token = jwt.sign(user, 'mytoken',{
                        expiresInMinutes:30
                    });

                   res.json({
                       success:true,
                       message:'Token gerado com sucesso',
                       token: token
                   });

                } else {
                    res.json({sucess:false,message:"password wrong"});
                }
            }
        })
        .catch(function(err) {
           res.json({message: err.message});
        });
};

