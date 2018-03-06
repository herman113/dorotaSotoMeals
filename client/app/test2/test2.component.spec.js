'use strict';

describe('Component: Test2Component', function() {
  // load the controller's module
  beforeEach(module('dorotaSotoMealsApp.test2'));

  var Test2Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Test2Component = $componentController('test2', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
