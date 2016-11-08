var app = angular.module('routeApp');
app.controller('MiniGameController', MiniGameController);

function MiniGameController($http, chanceService){

  var game = this;

  game.ffaArray = [];
  game.ffa = {};

  game.twoArray = [];
  game.two = {};

  game.ffaSelect = '';
  game.twoSelect = '';

  game.gameType = '';
  var gameRoll = '';

  game.getFFA = function(allFFA){
    chanceService.getFFA(allFFA)
      .then(function(response){
        game.ffaArray = response;
      });
  }

  game.getTwo = function(allTwo){
    chanceService.getTwo(allTwo)
      .then(function(response){
        game.twoArray = response;
      });
  }
  game.getFFA();
  game.getTwo();

  game.randFFA = function(){
    game.ffaSelect = game.ffaArray[Math.floor(Math.random()* game.ffaArray.length)];
  }
  game.randTwo = function(){
    game.twoSelect = game.twoArray[Math.floor(Math.random()* game.twoArray.length)];
  }

  game.selectType = function(){
    gameRoll = (randomNumber(1, 3));

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    if (gameRoll == 1) {
      gameRoll = 'Free For All';
    } else if (gameRoll == 2) {
      gameRoll = 'Two VS Two';
    }
    game.gameType = gameRoll;
  } // end selectType

  // game.getFFA();
  // game.getTwo();






} // end MiniGameController
