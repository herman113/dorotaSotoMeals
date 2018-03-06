'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './test2.routes';

export class Test2Component {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dorotaSotoMealsApp.test2', [uiRouter])
  .config(routes)
  .component('test2', {
    template: require('./test2.html'),
    controller: Test2Component,
    controllerAs: 'test2Ctrl'
  })
  .name;
