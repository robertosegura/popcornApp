'use strict';

describe('Controller: MoviesDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('popcornAppApp'));

  var MoviesdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviesdetailCtrl = $controller('MoviesDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoviesdetailCtrl.awesomeThings.length).toBe(3);
  });
});
