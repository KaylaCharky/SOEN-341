const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongo DB
mongoose.connect('mongodb://localhost/profile', {useUnifiedTopology: true, useNewUrlParser:true}).catch(err => console.log(err));
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.get('/', function(req, res){
    console.log('GET');
    res.send({name: 'kayla'});
});

app.listen(8080, function(){
    console.log('now listening for requests');
});