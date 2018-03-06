'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('test2', {
      url: '/test2',
      template: '<test-2></test-2>'
    });
}
