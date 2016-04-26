'use strict';

describe('Controller: SeriesListCtrl', function () {

  // load the controller's module
  beforeEach(module('popcornAppApp'));

  var SeriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeriesCtrl = $controller('SeriesListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SeriesCtrl.awesomeThings.length).toBe(3);
  });
});
