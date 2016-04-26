'use strict';

/**
 * @ngdoc service
 * @name popcornAppApp.movies
 * @description
 * # movies
 * Factory in the popcornAppApp.
 */
angular.module('popcornAppApp')
  .factory('movies', ['$http', function ($http) {

    var apiConfig = {
      api_key : '23b79478398eb7381fd54a5933546f35',
      language : 'en'
    };

    var baseURL = 'http://api.themoviedb.org/3';

    var movies = {};

    movies.list = [];

    var discoverMovie = function(page){
      var config = {
        params : jQuery.extend({}, apiConfig)
      };

      config.params.page = page;

      return $http.get(baseURL + '/discover/movie', config).then(function(response){
          return response.data;
      }, function(error) {
          console.log(error);
      });
    };

    var get = function(id){
      var config = {
        params : jQuery.extend({}, apiConfig)
      };

      return $http.get(baseURL + '/movie/' + id, config).then(function(response){
        return response.data;
      }, function(error) {
        console.log(error);
      });
    };

    var getVideos = function(id){
      var config = {
        params : jQuery.extend({}, apiConfig)
      }

      return $http.get(baseURL + '/movie/' + id + '/videos', config).then(function(response){
        if(response.data.results.length > 0){
          var data = response.data.results[response.data.results.length -1];
          //data.url = "https://www.youtube.com/watch?v=" + data.key;
          return data;
        }
        return {};
      }, function(error) {
        console.log(error);
      });
    }

    return {
      discoverMovie: discoverMovie,
      get: get,
      getVideos: getVideos
    };
  }]);
