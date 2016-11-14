var app = angular.module('routeApp');
app.controller('PlayerController', PlayerController);

function PlayerController($http, playerService){
  var player = this;

player.mario = '../assets/images/mario.png';
player.luigi = '../assets/images/luigi.png';
player.peach = '../assets/images/peach.png';
player.toad = '../assets/images/toadplayer.png';
player.koopa = '../assets/images/koopa.png';
player.dk = '../assets/images/dk.png';


  player.playersArray = [];
  player.player = {};

  player.teamPlayerOne = {};
  player.teamPlayerTwo = {};
  player.teamPlayerThree = {};
  player.teamPlayerFour = {};



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

        });
    }

    player.clearTable = function(remove){
      playerService.clearTable(remove)
        .then(function(){
          player.playersArray = [];
        });
    };
player.getPlayers();
    player.getTeams = function(){
      player.teamPlayerOne = player.playersArray[Math.floor(Math.random()* player.playersArray.length)];
      player.teamPlayerTwo = player.playersArray[Math.floor(Math.random()* player.playersArray.length)];
      player.teamPlayerThree = player.playersArray[Math.floor(Math.random()* player.playersArray.length)];
      player.teamPlayerFour = player.playersArray[Math.floor(Math.random()* player.playersArray.length)];

    while (player.teamPlayerTwo === player.teamPlayerOne || player.teamPlayerTwo === player.teamPlayerThree){
      player.teamPlayerTwo = player.playersArray[Math.floor(Math.random()* player.playersArray.length)];
    }
    while (player.teamPlayerThree === player.teamPlayerOne || player.teamPlayerThree === player.teamPlayerTwo){
      player.teamPlayerThree = player.playersArray[Math.floor(Math.random()* player.playersArray.length)];
    }
    while (player.teamPlayerFour === player.teamPlayerOne || player.teamPlayerFour === player.teamPlayerTwo ||player.teamPlayerFour === player.teamPlayerThree){
      player.teamPlayerFour = player.playersArray[Math.floor(Math.random()* player.playersArray.length)];

    }

    } // end getTeams


} // end PlayerController
