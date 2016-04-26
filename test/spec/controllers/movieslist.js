'use strict';

describe('Controller: MoviesListCtrl', function () {

  // load the controller's module
  beforeEach(module('popcornAppApp'));

  var MoviesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviesCtrl = $controller('MoviesListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoviesCtrl.awesomeThings.length).toBe(3);
  });
});
