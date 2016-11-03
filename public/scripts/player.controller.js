var app = angular.module('routeApp');
app.controller('PlayerController', PlayerController);

function PlayerController($http, playerService){
  var player = this;
  console.log('PlayerController loaded');

player.mario = '../assets/images/mario.png';
player.luigi = '../assets/images/luigi.png';
player.peach = '../assets/images/peach.png';
player.toad = '../assets/images/toadplayer.png';
player.koopa = '../assets/images/koopa.png';


  player.playersArray = [];
  player.player = {};

  // player.playerOne = 'P1';


    player.createPlayer = function(newPlayer){
      playerService.createPlayer(newPlayer)
        .then(function(){
          player.playersArray = [];

        });
    }

    player.getPlayers = function(allPlayers){
      playerService.getPlayers(allPlayers)
        .then(function(response){
          player.playersArray = response;

          console.log(player.playersArray);

          console.log(player.playerOne);
          console.log(player.playerTwo);
          console.log(player.playerThree);
          console.log(player.playerFour);
        });
    }





} // end PlayerController
