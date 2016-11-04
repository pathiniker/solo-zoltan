var app = angular.module('routeApp');
app.controller('IndexController', IndexController);

function IndexController($http, playerService){
  var player = this;
  console.log('IndexController loaded');


  player.playersArray = [];
  player.player = {};


    player.getPlayers = function(allPlayers){
      playerService.getPlayers(allPlayers)
        .then(function(response){
          player.playersArray = response;

          console.log(player.playersArray);

        });
    }

    player.updateCounter = function(allCount){
      allCount.forEach(function(players){
        playerService.updateCounter(players)
          .then(function(){
            player.getPlayers();
          });
      });
    }

    

    player.getPlayers();



} // end IndexController
