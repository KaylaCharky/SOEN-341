const express = require('express');
const router = express.Router();

//get the list of users form the database
router.get('/profile', function(req,res){
    res.send({type: 'GET'});
});

//adding a new user to the database
router.post('/profile', function(req,res){
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name
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