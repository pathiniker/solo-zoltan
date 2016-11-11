var app = angular.module('routeApp');
app.service('playerService', PlayerService);


function PlayerService($http){

  this.createPlayer = function(newPlayer){
    return $http.post('/players', newPlayer)
          .then(function(response){
            return response.data;
    });
  };

  this.getPlayers = function(allPlayers){
    return $http.get('/players', allPlayers)
          .then(function(response){
            return response.data;
    });
  };

  this.updateCounter = function(players){
    return $http.put('/players/'+players.id, players)
        .then(function(response){
          return response.data;
        });
  };

  this.clearTable = function(remove){
    return $http.delete('/players', remove)
      .then(function(response){
        return response.data;
      });
  };

}; // end PlayerService
