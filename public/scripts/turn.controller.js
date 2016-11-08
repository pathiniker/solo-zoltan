var app = angular.module('routeApp');
app.controller('TurnController', TurnController);

function TurnController($http, turnService){
  var turn = this;

  turn.turnsArray = [];
  turn.turn = {};

  turn.getCurrentTurn = function(thisTurn){
    turnService.getCurrentTurn(thisTurn)
        .then(function(response){
          turn.turnsArray = response;

        });
  };

  turn.updateTurn = function(turnCount){
    turnCount.forEach(function(turns){
      turnService.updateCounter(turns)
        .then(function(){
          turn.getCurrentTurn();
        });
    });
  };

  turn.resetTurn = function(reset){
    turnService.resetTurn(reset)
      .then(function(){
        turn.turnsArray = [];
      });
  };

  turn.beginGame = function(begin){
    turnService.beginGame(begin)
      .then(function(){
        turn.turnsArray = [];
      });
  }



  turn.getCurrentTurn();

} // end TurnController
