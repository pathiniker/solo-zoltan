var app = angular.module('routeApp');
app.controller('BowserController', BowserController);

function BowserController($http, playerService){

  var bowser = this;

  bowser.giveTakeArray = ['../assets/images/forward.png', '../assets/images/backward.png'];
  bowser.coinsArray = [1, 2, 3];

  bowser.giveTake = '';
  bowser.coins = '';
  bowser.playersArray = [];
  bowser.player = {};

  bowser.getPlayers = function(allPlayers){
    playerService.getPlayers(allPlayers)
      .then(function(response){
        bowser.playersArray = response;
      });
  }

bowser.getPlayers();
  bowser.spinFate = function(){
    console.log(bowser.playersArray);
    bowser.giveTake = bowser.giveTakeArray[Math.floor(Math.random()* bowser.giveTakeArray.length)];
    bowser.coins = bowser.coinsArray[Math.floor(Math.random()* bowser.coinsArray.length)];
    bowser.player = bowser.playersArray[Math.floor(Math.random()* bowser.playersArray.length)];

  }

} // end BowserController
