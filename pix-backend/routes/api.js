const express = require('express');
const router = express.Router();
const User = require('../models/user');

//get the list of users form the database
router.get('/profile', function(req,res){
    res.send({type: 'GET'});
});

//adding a new user to the database
router.post('/profile', function(req,res){
    User.create(req.body).then(function(user){
        res.send(user);
    });
});

//update a user profile
router.put('/profile/:id', function(req,res){
    res.send({type: 'PUT'});
});

//delete a user profile from the db
router.delete('/profile/:id', function(req,res){
    res.send({type: 'DELETE'});
});

module.exports = router;