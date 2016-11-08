var app = angular.module('routeApp');
app.controller('CandyController', CandyController);

function CandyController($http, chanceService){
  var candy = this;
  console.log('CandyController loaded');


  candy.candyArray = [];
  candy.candy = {};

  candy.stockOne = {};
  candy.stockTwo = {};
  candy.stockThree = {};


  candy.getCandy = function(allCandy){
    chanceService.getCandy(allCandy)
      .then(function(response){
        candy.candyArray = response;

      });
  } // end getCandy

  candy.getCandy();


  candy.pickThree = function(){
    candy.stockOne = candy.candyArray[Math.floor(Math.random()* candy.candyArray.length)];
    candy.stockTwo = candy.candyArray[Math.floor(Math.random()* candy.candyArray.length)];
    candy.stockThree = candy.candyArray[Math.floor(Math.random()* candy.candyArray.length)];

    if (candy.stockTwo == candy.stockOne) {
      candy.stockTwo = candy.candyArray[Math.floor(Math.random()* candy.candyArray.length)];
    }
    if (candy.stockThree == candy.stockTwo || candy.stockThree == candy.stockOne){
      candy.stockThree = candy.candyArray[Math.floor(Math.random()* candy.candyArray.length)];
    }

    console.log(candy.stockOne);
    console.log(candy.stockTwo);
    console.log(candy.stockThree);

    

  } // end pickThree

  candy.pickThree();




} // end CandyController
