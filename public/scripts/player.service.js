var app = angular.module('routeApp');

app.service('player', PlayerService);

function PlayerService($http){
  this.getPlayers = function(){
    return $http.get('/players')
          .then(function(response){
            return response.data;
          });
  };
};

function PlayerService($http){
  this.createPlayers = function(){
    return $http.post('/players')
          .then(function(response){
            return response.data;
          });
  };
};
