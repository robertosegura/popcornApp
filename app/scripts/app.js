'use strict';

/**
 * @ngdoc overview
 * @name popcornAppApp
 * @description
 * # popcornAppApp
 *
 * Main module of the application.
 */
angular
  .module('popcornAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngYoutubeEmbed'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movies', {
        templateUrl: 'views/movies/list.html',
        controller: 'MoviesListCtrl',
        controllerAs: 'mov'
      })
      .when('/movies/:id', {
        templateUrl: 'views/movies/detail.html',
        controller: 'MoviesDetailCtrl',
        controllerAs: 'mov'
      })
      .when('/series', {
        templateUrl: 'views/series/list.html',
        controller: 'SeriesListCtrl',
        controllerAs: 'ser'
      })
      .when('/series/:id', {
        templateUrl: 'views/series/detail.html',
        controller: 'SeriesDetailCtrl',
        controllerAs: 'ser'
      })
      .when('/series/:id_serie/season/:id_season', {
        templateUrl: 'views/seasons/detail.html',
        controller: 'SeasonsDetailCtrl',
        controllerAs: 'sea'
      })
      .otherwise({
        redirectTo: '/movies'
      });
  });
