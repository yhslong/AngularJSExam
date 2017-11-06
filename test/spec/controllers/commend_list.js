'use strict';

describe('Controller: CommendListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsexamApp'));

  var CommendListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommendListCtrl = $controller('CommendListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CommendListCtrl.awesomeThings.length).toBe(3);
  });
});
