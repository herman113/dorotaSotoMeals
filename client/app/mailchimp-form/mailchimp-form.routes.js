'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('mailchimp-form', {
      url: '/mailchimp-form',
      template: '<mailchimp-form></mailchimp-form>'
    });
}
