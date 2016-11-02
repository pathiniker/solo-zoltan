var app = angular.module('routeApp');
app.controller('PlayerController', PlayerController);

function PlayerController($http){
  var player = this;
  console.log('PlayerController loaded');

player.mario = '../assets/images/mario.png';
player.luigi = '../assets/images/luigi.png';
player.peach = '../assets/images/peach.png';
player.toad = '../assets/images/toad.png';
player.koopa = '../assets/images/koopa.png';


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
    console.log(player.playerTwo);
    console.log(player.playerThree);
    console.log(player.playerFour);
  };




} // end PlayerController
