const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

//get the list of users form the database
router.get('/profile/:id', function(req,res,next){
    User.findOne({_id: req.params.id}).then(function(user){
        res.send(user);
    });
});

//adding a new user to the database
router.post('/profile', function(req,res, next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

//update a user profile
router.put('/profile/:id', function(req,res,next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(user){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        });
    });
});

//delete a user profile from the db
router.delete('/profile/:id', function(req,res,next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    });
});

module.exports = router;