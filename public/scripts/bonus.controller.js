var app = angular.module('routeApp');
app.controller('BonusController', BonusController);

function BonusController($http){
  var bonus = this;

  bonus.starsArray = ['Red', 'Green', 'Minigame', 'Candy'];
  bonus.starOne = '';
  bonus.starTwo = '';
  bonus.starThree = '';

  bonus.pickOne = function(){
    bonus.starOne = bonus.starsArray[Math.floor(Math.random()* bonus.starsArray.length)];
  }

  bonus.pickTwo = function(){
    bonus.starTwo = bonus.starsArray[Math.floor(Math.random()* bonus.starsArray.length)];
    while (bonus.starTwo === bonus.starOne){
      bonus.starTwo = bonus.starsArray[Math.floor(Math.random()* bonus.starsArray.length)];
    }

  }

  bonus.pickThree = function(){
    bonus.starThree = bonus.starsArray[Math.floor(Math.random()* bonus.starsArray.length)];
    while (bonus.starThree === bonus.starOne || bonus.starThree === bonus.starTwo){
      bonus.starThree = bonus.starsArray[Math.floor(Math.random()* bonus.starsArray.length)];
    }
  }









} // end BonusController
