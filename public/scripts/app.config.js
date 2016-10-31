angular.module('routeApp')
        .config(function($routeProvider, $locationProvider) {
          $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
          }).when('/rules', {
            templateUrl: 'views/rules.html',
          }).when('/game', {
            templateUrl: 'views/game.html',
          }).when('/green', {
            templateUrl: 'views/green.html',
          }).when('/candy', {
            templateUrl: 'views/candy.html',
          }).when('/casino', {
            templateUrl: 'views/casino.html',
          }).when('/bowser', {
            templateUrl: 'views/bowser.html',
          }).otherwise({
            redirectTo: '/home',
          });

          $locationProvider.html5Mode(true);
        });