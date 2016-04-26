'use strict';

/**
 * @ngdoc function
 * @name popcornAppApp.controller:SeriesCtrl
 * @description
 * # SeriesCtrl
 * Controller of the popcornAppApp
 */
angular.module('popcornAppApp')
  .controller('SeriesListCtrl', ['series', '$location', function (series, $location) {

    var vm = this;

    vm.series = [];

    vm.page = ($location.search().page) ? $location.search().page : 1;

    vm.getSeries = function(page){
      series.discoverTV(page).then(function(data){
          vm.series = data;
      })
    };

    vm.getSeries(vm.page);

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

      $location.url('/series?page=' + vm.page);
    };

  }]);
