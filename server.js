var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var players = require('./routes/players');
var currentTurn = require('./routes/currentTurn');
var chance = require('./routes/chance');
var ffa = require('./routes/ffa');
var two = require('./routes/two');
var slots = require('./routes/slots');
var jackpot = require('./routes/jackpot');
var bankBalance = require('./routes/bankBalance');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/players', players);
app.use('/currentTurn', currentTurn);
app.use('/chance', chance);
app.use('/ffa', ffa);
app.use('/two', two);
app.use('/slots', slots);
app.use('/jackpot', jackpot);
app.use('/bankBalance', bankBalance);

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(2000);
