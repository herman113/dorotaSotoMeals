'use strict';

describe('Component: TestComponent', function() {
  // load the controller's module
  beforeEach(module('dorotaSotoMealsApp.test'));

  var TestComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TestComponent = $componentController('test', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
