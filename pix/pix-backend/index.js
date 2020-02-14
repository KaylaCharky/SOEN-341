const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const uri = process.env.ATLAS_URI;
//connect to mongo DB
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser:true}).catch(err => console.log(err));
mongoose.Promise = global.Promise;

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

// app.use('/api', require('./routes/api'));

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

app.listen(8080, function(){
    console.log('now listening for requests');
});
