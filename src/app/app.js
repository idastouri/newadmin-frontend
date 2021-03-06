import angular from 'angular';
import 'angular-jsoneditor';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-animate';
import 'angular-cookies';
import 'angular-touch';
import 'angularjs-toaster';
import 'angularjs-toaster/toaster.css';
import 'angular-spinner';
import 'ng-infinite-scroll';

import '../less/app.less';

import AppController from './shared/AppController';

import layoutHeader from './shared/layoutHeader/layoutHeader';
import layoutFooter from './shared/layoutFooter/layoutFooter';

import Config from './shared/Config';

import AppConfig from './shared/AppConfig';
import AppRun from './shared/AppRun';

import CrazeAdminHome from './home/home';
import CrazeAdminPosts from './posts/posts';

const MODULE_NAME = 'CrazeAdmin';

angular.module(MODULE_NAME, [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'ngTouch',
  'ngCookies',
  'angular-jsoneditor',
  'toaster',
  'angularSpinner',
  'infinite-scroll',

  CrazeAdminHome,
  CrazeAdminPosts
])
  .controller('AppController', AppController)

  .component('layoutHeader', layoutHeader)
  .component('layoutFooter', layoutFooter)

  .constant('Config', Config)

  .config(AppConfig)

  .run(AppRun);

export default MODULE_NAME;
