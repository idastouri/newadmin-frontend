import HomeController from './HomeController';

import homepage from './homepage/homepage';
import signIn from './signIn/signIn';

import UserService from './UserService';

import HomeConfig from './HomeConfig';

const MODULE_NAME = 'CrazeAdmin.home';

angular.module(MODULE_NAME, [])
  .controller('HomeController', HomeController)

  .component('homepage', homepage)
  .component('signIn', signIn)

  .factory('UserService', UserService)

  .config(HomeConfig);

export default MODULE_NAME;
