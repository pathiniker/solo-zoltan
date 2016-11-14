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
  slot.payoutStar = 0;
  slot.payoutStatus = '';
  slot.jackpotStar = '';

  slot.star = '../assets/images/8star.png';

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
      });
  } // end getSlot

  slot.getSlot();
  slot.getJackpot();




  slot.insertCoin = function(){
      if (slot.spins >= 1) {
        alert("You've still got spins!");
      } else if (slot.spins == 0){
        chanceService.insertCoin(slot.jackpotArray[0].amount + 1, slot.jackpotArray[0].starcount)
          .then(function() {
            slot.spins = 3;
            slot.spinResult = '';
            slot.resOne = {};
            slot.resTwo = {};
            slot.resThree = {};
            slot.payout--;
            slot.jackpotArray[0].amount++;

            console.log('Coins:', slot.jackpotArray[0].amount);
            console.log('Stars:', slot.jackpotArray[0].starcount);


                      if (slot.payout < 0) {
                        slot.payoutStatus = 'negative';
                      } else if (slot.payout > 0) {
                        slot.payoutStatus = 'positive';
                      } else {
                        slot.payoutStatus = '';
                      }

              if (slot.jackpotArray[0].amount >= 10){
                  slot.jackpotArray[0].starcount++;
                  slot.jackpotArray[0].amount = (slot.jackpotArray[0].amount - 10);
                }
              if (slot.jackpotArray[0].starcount > 0){
                slot.jackpotStar = slot.star;

              }

          });


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
      slot.spinResult = '+3';
      slot.spins = 0;
      slot.payout = slot.payout + 3;
    } else if (slot.resOne.number === slot.resTwo.number && slot.resOne.number === slot.resThree.number && (slot.resOne.number + slot.resTwo.number + slot.resThree.number) === 9){
      slot.spinResult = 'Jackpot';
      slot.spins = 0;
      slot.payoutStar += slot.jackpotArray[0].starcount;
      slot.payout = slot.payout + slot.jackpotArray[0].amount;
      slot.jackpotArray[0].amount = 5;
      slot.jackpotStar = '';
      slot.jackpotArray[0].starcount = 0;
    }


      if (slot.payout < 0) {
        slot.payoutStatus = 'negative';
      } else if (slot.payout > 0) {
        slot.payoutStatus = 'positive';
      } else {
        slot.payoutStatus = '';
      }



    } // end else if


  } // end spinSlots




} // end CasinoController
