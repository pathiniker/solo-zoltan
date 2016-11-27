var app = angular.module('routeApp');
app.controller('BankController', BankController);

function BankController($http, chanceService) {
  var bank = this;

  bank.balanceArray = [];
  bank.balance = {};


  bank.increase = function(){
    chanceService.increase(bank.balanceArray[0].balance + 1)
      .then(function() {
        bank.balanceArray[0].balance++;
        console.log(bank.balanceArray[0].balance);
      });
  };

  bank.reset = function(){
    chanceService.reset(bank.balanceArray[0].balance = 0)
      .then(function() {
        console.log(bank.balanceArray[0].balance);
      })
  }


  bank.getBalance = function(bankBalance) {
    chanceService.getBalance(bankBalance)
      .then(function(response){
        bank.balanceArray = response;
        console.log(response);
      });
  };



  bank.getBalance();

} // end BankController
