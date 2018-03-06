'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import 'angular-socket-io';

import uiRouter from 'angular-ui-router';

import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import about from './about/about.component';
import services from './services/services.component';
import coaching from './coaching/coaching.component';
import menu from './menu/menu.component';
import events from './events/events.component';
import test from './test/test.component';
import test2 from './test2/test2.component';
import gallery from './gallery/gallery.component';
import mailchimpForm from './mailchimp-form/mailchimp-form.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import './app.scss';

angular.module('dorotaSotoMealsApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io',
  uiRouter, navbar, footer, main, constants, socket, util, about, test, test2, gallery, mailchimpForm, services, coaching, menu, events
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['dorotaSotoMealsApp'], {
      strictDi: true
    });
  });
