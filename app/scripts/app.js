'use strict';

angular.module('happyFridayWebApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/techtalk', {
        templateUrl: 'views/techtalk.html',
        controller: 'MainCtrl'
      })
      .when('/foodfinder', {
        templateUrl: 'views/foodfinder.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
