var app = angular.module('routeApp');
app.service('chanceService', ChanceService);

function ChanceService($http){

  this.getCandy = function(allCandy){
    return $http.get('/chance', allCandy)
      .then(function(response){
        return response.data;
      });
  };

  this.getFFA = function(allFFA){
    return $http.get('/ffa', allFFA)
      .then(function(response){
        return response.data;
      });
  };

  this.getTwo = function(allTwo){
    return $http.get('/two', allTwo)
      .then(function(response){
        return response.data;
      });
  };

  this.getSlot = function(allSlots){
    return $http.get('/slots', allSlots)
      .then(function(response){
        return response.data;
      });
  };

  this.getJackpot = function(defJackpot){
    return $http.get('/jackpot', defJackpot)
      .then(function(response){
        return response.data;
      });
  };

  this.insertCoin = function(newAmount, newCount){
    return $http.put('/jackpot', {amount:newAmount, starcount:newCount})
        .then(function(response){
          return response.data;
        });
  };

  this.getBalance = function(bankBalance){
    return $http.get('/bankBalance', bankBalance)
      .then(function(response){
        return response.data;
      });
  };

  this.increase = function(newBalance){
    return $http.put('/bankBalance', {balance:newBalance})
      .then(function(response){
        return response.data;
      });
  };

  this.reset = function(newBalance){
    return $http.put('/bankBalance', {balance:newBalance})
      .then(function(response){
        return response.data;
      });
  };





} // end ChanceService
