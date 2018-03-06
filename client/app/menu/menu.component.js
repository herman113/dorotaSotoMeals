'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './menu.routes';

export class MenuComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dorotaSotoMealsApp.menu', [uiRouter])
  .config(routes)
  .component('menu', {
    template: require('./menu.html'),
    controller: MenuComponent,
    controllerAs: 'menuCtrl'
  })
  .name;
