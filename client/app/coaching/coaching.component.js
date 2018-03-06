'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './coaching.routes';

export class CoachingComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dorotaSotoMealsApp.coaching', [uiRouter])
  .config(routes)
  .component('coaching', {
    template: require('./coaching.html'),
    controller: CoachingComponent,
    controllerAs: 'coachingCtrl'
  })
  .name;
