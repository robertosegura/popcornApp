'use strict';

describe('Controller: SeriesDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('popcornAppApp'));

  var SeriesdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeriesdetailCtrl = $controller('SeriesDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SeriesdetailCtrl.awesomeThings.length).toBe(3);
  });
});
