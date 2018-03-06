'use strict';

describe('Component: EventsComponent', function() {
  // load the controller's module
  beforeEach(module('dorotaSotoMealsApp.events'));

  var EventsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    EventsComponent = $componentController('events', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
