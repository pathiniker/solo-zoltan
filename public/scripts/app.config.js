angular.module('routeApp')
        .config(function($routeProvider, $locationProvider) {
          $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
          }).when('/rules', {
            templateUrl: 'views/rules.html',
          }).when('/game', {
            templateUrl: 'views/game.html',
            controller: 'MiniGameController as game',
          }).when('/green', {
            templateUrl: 'views/green.html',
            controller: 'GreenController as green',
          }).when('/candy', {
            templateUrl: 'views/candy.html',
            controller: 'CandyController as candy',
          }).when('/casino', {
            templateUrl: 'views/casino.html',
            controller: 'CasinoController as slot',
          }).when('/bowser', {
            templateUrl: 'views/bowser.html',
            controller: 'BowserController as bowser',
          }).when('/newgame', {
            templateUrl: 'views/newgame.html',
            controller: 'PlayerController as player',
          }).when('/playerspage', {
            templateUrl: 'views/playerspage.html',
            controller: 'IndexController as player',
          }).when('/confirm', {
            templateUrl: 'views/confirm.html',
            controller: 'PlayerController as player',
          }).when('/standings', {
            templateUrl: 'views/standings.html',
            controller: 'PlayerController as player',
          }).when('/bonus', {
            templateUrl: '/views/bonus.html',
            controller: 'PlayerController as player',
          }).when('/winner', {
            templateUrl: '/views/winner.html',
            controller: 'PlayerController as player',
          }).when('/bank', {
            templateUrl: '/views/bank.html',
            controller: 'BankController as bank',
          }).when('/board', {
            templateUrl: '/views/board.html',
            controller: 'BoardController as board',
          }).otherwise({
            redirectTo: '/home',
          });

          $locationProvider.html5Mode(true);
        });
