'use strict';

describe('Controller: PutupListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsexamApp'));

  var PutupListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PutupListCtrl = $controller('PutupListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PutupListCtrl.awesomeThings.length).toBe(3);
  });
});
