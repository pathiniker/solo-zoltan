var app = angular.module('routeApp');
app.service('turnService', TurnService);

function TurnService($http){

  this.getCurrentTurn = function(thisTurn){
    return $http.get('/currentTurn', thisTurn)
      .then(function(response){
        return response.data;
      });
  };

  this.updateCounter = function(turns){

    return $http.put('/currentTurn/'+turns.id, turns)
        .then(function(response){
          return response.data;
        });
  };



}; // end TurnService
