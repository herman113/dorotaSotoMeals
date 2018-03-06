'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './mailchimp-form.routes';

export class MailchimpFormComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dorotaSotoMealsApp.mailchimp-form', [uiRouter])
  .config(routes)
  .component('mailchimpForm', {
    template: require('./mailchimp-form.html'),
    controller: MailchimpFormComponent,
    controllerAs: 'mailchimpFormCtrl'
  })
  .name;
