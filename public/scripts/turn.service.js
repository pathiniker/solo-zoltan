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

  this.resetTurn = function(reset){
    return $http.delete('/currentTurn', reset)
      .then(function(response){
        return response.data;
      });
  };

  this.beginGame = function(begin){
    return $http.post('/currentTurn', begin)
          .then(function(response){
            return response.data;
    });
  };

}; // end TurnService
