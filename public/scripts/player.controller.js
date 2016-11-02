var app = angular.module('routeApp');
app.controller('PlayerController', PlayerController);

function PlayerController($http){
  var player = this;
  console.log('PlayerController loaded');

  player.playersArray = [];
  player.player = {};

  player.getPlayers = function(response){
    return $http({
      url: '/players',
      method: 'GET'
    }).then(function(response){
      player.playersArray = response.data;
      console.log('response.data', response.data);
    });
  };

  player.addPlayer = function(){
    // return $http({
    //   url: '/players',
    //   method: 'POST'
    // }).then(function(){

    // });
    console.log(player.playerOne);
    console.log();
  };





} // end PlayerController
