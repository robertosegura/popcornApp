'use strict';

/**
 * @ngdoc function
 * @name popcornAppApp.controller:MoviesdetailCtrl
 * @description
 * # MoviesdetailCtrl
 * Controller of the popcornAppApp
 */
angular.module('popcornAppApp')
  .controller('MoviesDetailCtrl', ['movies', '$routeParams', function (movies, $routeParams) {

    var vm = this;

    vm.movie = {};
    vm.video = {};
    vm.url = "https://www.youtube.com/watch?v=zX-iZuB16wg";

    (function(){
      var id = $routeParams.id;

      movies.get(id).then(function(data){
        vm.movie = data;
      })

      movies.getVideos(id).then(function(data){
        vm.video = data;
        //vm.url = vm.video.url;
        //vm.url = String(vm.url) + String(vm.video.key);
        //console.log(vm.url);
      });
    }());

  }]);
