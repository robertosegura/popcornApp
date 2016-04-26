'use strict';

/**
 * @ngdoc function
 * @name popcornAppApp.controller:SeasonsCtrl
 * @description
 * # SeasonsCtrl
 * Controller of the popcornAppApp
 */
angular.module('popcornAppApp')
  .controller('SeasonsDetailCtrl', ['series', '$routeParams', function (series, $routeParams) {

    var vm = this;

    vm.serie = {};
    vm.season = {};
    vm.episodes = [];

    function getEpisodes(){
      var id_serie = $routeParams.id_serie;
      var id_season = $routeParams.id_season;

      /*series.getEpisodes(id_serie, id_season).then(function(data){
          vm.episodes = data;
          console.log(vm.episodes);
      });*/
    };

    function getSeason(){
      var id_season = $routeParams.id_season;
      var id_serie = $routeParams.id_serie;

      series.getSeason(id_serie, id_season).then(function(data){
        vm.season = data;
      });
    }

    function getSerie(){
      var id_serie = $routeParams.id_serie;

      series.get(id_serie).then(function(data){
        vm.serie = data;
      });
    }


    function init(){
      getSerie();
      getSeason();
      getEpisodes();
    }

    init();

  }]);
