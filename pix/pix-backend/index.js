const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongo DB
mongoose.connect('mongodb://localhost/profile', {useUnifiedTopology: true, useNewUrlParser:true}).catch(err => console.log(err));
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//error handling middleware
app.use(function(err, req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

app.get('/', function(req, res){
    console.log('GET');
    res.send({name: 'kayla'});
});

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const picturesRouter = require('./routes/pictures');
app.use('/pictures', picturesRouter);

app.listen(8080, function(){
    console.log('now listening for requests');
});