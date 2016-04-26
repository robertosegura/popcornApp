'use strict';

/**
 * @ngdoc service
 * @name popcornAppApp.series
 * @description
 * # series
 * Factory in the popcornAppApp.
 */
angular.module('popcornAppApp')
  .factory('series', ['$http', function ($http) {

    var apiConfig = {
      api_key : '23b79478398eb7381fd54a5933546f35',
      language : 'es'
    };

    function discoverTV(page){
      var config = {
          params : jQuery.extend({}, apiConfig)
      };

      config.params.page = page;

      return $http.get('http://api.themoviedb.org/3/discover/tv', config).then(function(response){
          console.log(response.data);
          return response.data;
      }, function(error) {
          console.log(error);
      })
    }

    function get(id){
      var config = {
          params : jQuery.extend({}, apiConfig)
      };

      return $http.get('http://api.themoviedb.org/3/tv/' + id, config).then(function(response){
          console.log(response.data);
          return response.data;
      }, function(error) {
          console.log(error);
      })
    }

    function getSeason(id_serie, id_season){
      var config = {
          params : jQuery.extend({}, apiConfig)
      };

      return $http.get('http://api.themoviedb.org/3/tv/' + id_serie + '/season/' + id_season, config).then(function(response){
        console.log(response.data);
        return response.data;
      }, function(error) {
        console.log(error);
      })
    }


    return {
      discoverTV : discoverTV,
      get: get,
      getSeason: getSeason
    };

  }]);
