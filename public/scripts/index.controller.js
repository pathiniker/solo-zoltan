var app = angular.module('routeApp');
app.controller('IndexController', IndexController);

function IndexController($http, playerService){
  var player = this;


  player.playersArray = [];
  player.player = {};


    player.getPlayers = function(allPlayers){
      playerService.getPlayers(allPlayers)
        .then(function(response){
          player.playersArray = response;

        });
    }

    player.updateCounter = function(allCount){
      allCount.forEach(function(newAmount){
        playerService.updateCounter(newAmount)
          .then(function(){
            player.getPlayers();
          });
      });
    }

    player.getPlayers();





} // end IndexController
