var app = angular.module('routeApp');
app.controller('GreenController', GreenController);

function GreenController($http){
  var green = this;

  green.spin = '';


  green.rollDice = function(){
    var greenRoll = (randomNumber(1, 7));

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    green.spin = greenRoll;
  }; // end rollDice




} // end GreenController
