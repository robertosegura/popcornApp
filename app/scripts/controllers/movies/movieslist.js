'use strict';

/**
 * @ngdoc function
 * @name popcornAppApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the popcornAppApp
 */
angular.module('popcornAppApp')
  .controller('MoviesListCtrl', ['movies', '$location', function (movies, $location) {

    var vm = this;

    vm.movies = [];

    vm.page = ($location.search().page) ? $location.search().page : 1;

    vm.discoverMovie = function(page){
      movies.discoverMovie(page).then(function(movies){
          vm.movies = movies;
      });
    };

    vm.discoverMovie(vm.page);

    vm.changePage = function(action){
      switch (action){
          case '+':
              vm.page++;
              break;
          case '-':
              vm.page--;
              break;
      }

      vm.page = (vm.page > 0) ? vm.page : 1;

      $location.url('/movies?page=' + vm.page);
    };

  }]);
