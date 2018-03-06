'use strict';

describe('Component: CoachingComponent', function() {
  // load the controller's module
  beforeEach(module('dorotaSotoMealsApp.coaching'));

  var CoachingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CoachingComponent = $componentController('coaching', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
