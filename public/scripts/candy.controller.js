var app = angular.module('routeApp');
app.controller('CandyController', CandyController);

function CandyController($http, chanceService){
  var candy = this;


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

    while (candy.stockTwo === candy.stockOne){
      candy.stockTwo = candy.candyArray[Math.floor(Math.random()* candy.candyArray.length)];
    }
    while (candy.stockThree === candy.stockOne || candy.stockThree === candy.stockTwo){
      candy.stockThree = candy.candyArray[Math.floor(Math.random()* candy.candyArray.length)];
    }


  } // end pickThree





} // end CandyController
