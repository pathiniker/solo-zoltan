var app = angular.module('routeApp');
app.controller('IndexController', IndexController);

function IndexController($http, playerService){
  var player = this;
  console.log('IndexController loaded');

// player.mario = '../assets/images/mario.png';
// player.luigi = '../assets/images/luigi.png';
// player.peach = '../assets/images/peach.png';
// player.toad = '../assets/images/toadplayer.png';
// player.koopa = '../assets/images/koopa.png';


  player.playersArray = [];
  player.player = {};

  // player.playerOne = 'P1';

    player.getPlayers = function(allPlayers){
      playerService.getPlayers(allPlayers)
        .then(function(response){
          player.playersArray = response;

          console.log(player.playersArray);

          console.log(player.playersArray[0]);
          console.log(player.playersArray[1]);
          console.log(player.playersArray[2]);
          console.log(player.playersArray[3]);
        });
    }


    player.getPlayers();



} // end IndexController
