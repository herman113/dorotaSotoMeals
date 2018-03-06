'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('menu', {
      url: '/menu',
      template: '<menu></menu>'
    });
}
