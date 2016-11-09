var app = angular.module('routeApp');
app.controller('CasinoController', CasinoController);

function CasinoController($http, chanceService){

var slot = this;

  slot.spinsArray = [];
  slot.spin = {};

  slot.resOne = {};
  slot.resTwo = {};
  slot.resThree = {};


  slot.spinResult = '';
  slot.jackpot = {};
  slot.jackpotArray = [];

  slot.spins = 0;
  slot.payout = 0;



  slot.getSlot = function(allSlots){
    chanceService.getSlot(allSlots)
      .then(function(response){
        slot.spinsArray = response;
      });
  } // end getSlot

  slot.getJackpot = function(defJackpot){
    chanceService.getJackpot(defJackpot)
      .then(function(response){
        slot.jackpotArray = response;
        console.log(response);
      });
  } // end getSlot

  slot.getSlot();
  slot.getJackpot();


  slot.insertCoin = function(){
      if (slot.spins >= 1) {
        alert("You've still got spins!");
      } else if (slot.spins == 0){
        chanceService.insertCoin(slot.jackpotArray[0].amount + 1)
          .then(function() {
            slot.spins = 3;
            slot.spinResult = '';
            slot.resOne = {};
            slot.resTwo = {};
            slot.resThree = {};
            slot.payout--;
            slot.jackpotArray[0].amount++;

            console.log(slot.jackpotArray[0].amount);
          });

          // slot.jackpotArray[0].amount = response;
          // slot.getJackpot();

        } // end else if

        // });
  }

  slot.spinSlots = function(){
    if (slot.spins === 0){
      alert('Insert coin to play!');
    } else if (slot.spins >= 1){

    slot.spinResult = '';
    slot.spins--;

    slot.resOne = slot.spinsArray[Math.floor(Math.random()* slot.spinsArray.length)];
    slot.resTwo = slot.spinsArray[Math.floor(Math.random()* slot.spinsArray.length)];
    slot.resThree = slot.spinsArray[Math.floor(Math.random()* slot.spinsArray.length)];


    if (slot.resOne.number === slot.resTwo.number && slot.resOne.number === slot.resThree.number && (slot.resOne.number + slot.resTwo.number + slot.resThree.number) === 3) {
      slot.spinResult = '+1';
      slot.spins = 0;
      slot.payout = slot.payout + 1;
    } else if (slot.resOne.number === slot.resTwo.number && slot.resOne.number === slot.resThree.number && (slot.resOne.number + slot.resTwo.number + slot.resThree.number) === 6){
      slot.spinResult = '+2';
      slot.spins = 0;
      slot.payout = slot.payout + 2;
    } else if (slot.resOne.number === slot.resTwo.number && slot.resOne.number === slot.resThree.number && (slot.resOne.number + slot.resTwo.number + slot.resThree.number) === 9){
      slot.spinResult = 'Jackpot';
      slot.spins = 0;
      slot.payout = slot.payout + slot.jackpotArray[0].amount;
      slot.jackpotArray[0].amount = 3;
    }

    } // end else if


  } // end spinSlots




} // end CasinoController
