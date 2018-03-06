'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('coaching', {
      url: '/coaching',
      template: '<coaching></coaching>'
    });
}
