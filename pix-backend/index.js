const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.get('/', function(req, res){
    console.log('GET');
    res.send({name: 'kayla'});
});

app.listen(8080, function(){
    console.log('now listening for requests');
});