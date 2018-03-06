'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './gallery.routes';

export class GalleryComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dorotaSotoMealsApp.gallery', [uiRouter])
  .config(routes)
  .component('gallery', {
    template: require('./gallery.html'),
    controller: GalleryComponent,
    controllerAs: 'galleryCtrl'
  })
  .name;
