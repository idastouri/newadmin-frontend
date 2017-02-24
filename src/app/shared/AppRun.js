import { isEqual } from 'underscore';

function AppRun($rootScope, $state, $cookies, Config, UserService) {
  // define some helper methods for use in routing config below
  const routingHelper = {
    isCurrentState(toState, toParams) {
      return $state.is(toState) && isEqual($state.params, toParams);
    }
  };

  // Configure some state change behavior
  // `viewLoading` is true during a state change
  $rootScope.viewLoading = false;

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
    if (routingHelper.isCurrentState(toState, toParams) && !options.reload) {
      // prevents duplicate state transistions from get triggered back-to-back. This
      // mainly fixes an issue introduced in newer versions of angular-ui-router
      // that was casuing that can cause multple transition events to fire for the same route
      event.preventDefault();
    } else {
      $rootScope.viewLoading = true;
    }
  });

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $rootScope.viewLoading = false;
  });

  if ($cookies.get('currentUser')) {
    UserService.setUserData($cookies.getObject('currentUser'));
    UserService.setSessionToken($cookies.get('sessionToken'));
  }

  // Set current environment as default from the Config
  $rootScope.currentEnv = Config.defaultEnv;
  $rootScope.currentBrand = Config.defaultBrand;
  $rootScope.currentUser = UserService.user;
}

AppRun.$inject = ['$rootScope', '$state', '$cookies', 'Config', 'UserService'];

export default AppRun;
