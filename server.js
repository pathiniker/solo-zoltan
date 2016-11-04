var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var players = require('./routes/players');
var currentTurn = require('./routes/currentTurn');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/players', players);
app.use('/currentTurn', currentTurn);

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000);
