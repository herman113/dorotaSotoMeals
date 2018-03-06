'use strict';

describe('Component: MenuComponent', function() {
  // load the controller's module
  beforeEach(module('dorotaSotoMealsApp.menu'));

  var MenuComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MenuComponent = $componentController('menu', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
