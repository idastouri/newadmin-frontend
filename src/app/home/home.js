import HomeController from './HomeController';

import signIn from './signIn/signIn';

import UserService from './UserService';

import HomeConfig from './HomeConfig';

const MODULE_NAME = 'CrazeAdmin.home';

angular.module(MODULE_NAME, [])
  .controller('HomeController', HomeController)

  .component('signIn', signIn)

  .factory('UserService', UserService)

  .config(HomeConfig);

export default MODULE_NAME;
