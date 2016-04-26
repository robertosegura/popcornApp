'use strict';

/**
 * @ngdoc function
 * @name popcornAppApp.controller:SeriesdetailCtrl
 * @description
 * # SeriesdetailCtrl
 * Controller of the popcornAppApp
 */
angular.module('popcornAppApp')
  .controller('SeriesDetailCtrl', ['series', '$routeParams', function (series, $routeParams) {

    var vm = this;

    vm.serie = {};

    (function(){
      var id = $routeParams.id;

      series.get(id).then(function(data){
        vm.serie = data;
      });
    }());

  }]);
