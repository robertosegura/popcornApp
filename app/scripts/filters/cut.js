'use strict';

/**
 * @ngdoc filter
 * @name popcornAppApp.filter:cut
 * @function
 * @description
 * # cut
 * Filter in the popcornAppApp.
 */
angular.module('popcornAppApp')
  .filter('cut', function () {
    return function (value, wordwise, max, tail) {
      if (!value) return '';

      max = parseInt(max, 10);
      if (!max) return value;
      if (value.length <= max) return value;

      value = value.substr(0, max);
      if (wordwise) {
          var lastspace = value.lastIndexOf(' ');
          if (lastspace != -1) {
              if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
                  lastspace = lastspace - 1;
              }
              value = value.substr(0, lastspace);
          }
      }

      return value + (tail || ' …');
    };
  });
