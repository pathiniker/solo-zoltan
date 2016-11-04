var app = angular.module('routeApp');
app.controller('TurnController', TurnController);

function TurnController($http, turnService){
  var turn = this;
  console.log('TurnController loaded');

  turn.turnsArray = [];
  turn.turn = {};

  turn.getCurrentTurn = function(thisTurn){
    turnService.getCurrentTurn(thisTurn)
        .then(function(response){
          turn.turnsArray = response;

          console.log('Current turn:', response);
        });
  };

  turn.updateTurn = function(turnCount){
    turnCount.forEach(function(turns){
      turnService.updateCounter(turns)
        .then(function(){
          turn.getCurrentTurn();
        });
    });
  }



  turn.getCurrentTurn();

} // end TurnController
