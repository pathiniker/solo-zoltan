var app = angular.module('routeApp');
app.service('chanceService', ChanceService);

function ChanceService($http){

  this.getCandy = function(allCandy){
    return $http.get('/chance', allCandy)
      .then(function(response){
        return response.data;
      });
  };





} // end ChanceService
