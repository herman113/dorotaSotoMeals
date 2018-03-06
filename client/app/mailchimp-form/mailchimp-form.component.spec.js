'use strict';

describe('Component: MailchimpFormComponent', function() {
  // load the controller's module
  beforeEach(module('dorotaSotoMealsApp.mailchimp-form'));

  var MailchimpFormComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MailchimpFormComponent = $componentController('mailchimp-form', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
