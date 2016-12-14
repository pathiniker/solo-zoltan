var app = angular.module('routeApp');
app.controller('BoardController', BoardController);

function BoardController($http){
  var board = this;

  board.playerOne = 'playerOne';
  board.rollResult = '';

// Rows and Columns //
  board.rowOne = [{}, {}, {}, {}, {}];
  board.colOne = [{}, {}, {}, {}];

  board.rowTwo = [{}, {}, {}, {}];
  board.colTwo = [{}, {}, {}, {}];

  board.rowThree = [{}, {}, {}];
  board.colThree = [{}, {}, {}];


  board.colors = ['blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'yellow', 'black'];

  board.totalSpaces = (board.rowOne.length + board.colOne.length + board.rowTwo.length + board.colTwo.length + board.rowThree.length + board.colThree.length);
  board.totalColors = board.colors.length;
  console.log('Spaces:', board.totalSpaces);
  console.log('Colors:', board.totalColors);

  if (board.totalSpaces === board.totalColors) {
    console.log('EVEN!');
  } else if (board.totalSpaces > board.totalColors) {
    console.log('Need ' + (board.totalSpaces - board.totalColors) + ' more colors!');
  } else if (board.totalSpaces < board.totalColors) {
    console.log('Plenty of colors!');
  }


  board.rowOne.forEach(function(space){
    var randomNum = Math.round(Math.random()* board.colors.length);
    space.color = board.colors[randomNum];
    board.colors.splice(randomNum, 1);
  });

  board.colOne.forEach(function(space){
    var randomNum = Math.round(Math.random()* board.colors.length);
    space.color = board.colors[randomNum];
    board.colors.splice(randomNum, 1);
  });

  board.rowTwo.forEach(function(space){
    var randomNum = Math.round(Math.random()* board.colors.length);
    space.color = board.colors[randomNum];
    board.colors.splice(randomNum, 1);
  });

  board.colTwo.forEach(function(space){
    var randomNum = Math.round(Math.random()* board.colors.length);
    space.color = board.colors[randomNum];
    board.colors.splice(randomNum, 1);
  });

  board.rowThree.forEach(function(space){
    var randomNum = Math.round(Math.random()* board.colors.length);
    space.color = board.colors[randomNum];
    board.colors.splice(randomNum, 1);
  });

  board.colThree.forEach(function(space){
    var randomNum = Math.round(Math.random()* board.colors.length);
    space.color = board.colors[randomNum];
    board.colors.splice(randomNum, 1);
  });


  // ----- Roll Dice ----- //

  board.rollDice = function() {
    board.rollResult = Math.round(Math.random()* 6);
  }

  board.playerLocation = board.playerOne;




} // end BoardController
