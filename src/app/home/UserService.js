function UserService($http, $log, $q, $rootScope, $cookies, $state, Config, toaster) {
  return {
    user: null,
    sessionToken: '',
    pending: false,

    login(credentials) {
      $log.log(`Request credentials: ${JSON.stringify(credentials)}`);

      this.pending = true;

      return $http({
        method: 'POST',
        url: `${$rootScope.currentEnv.apiUrl}/users/login`,
        // credentials is an object that contains `username` and `password`
        data: $.param(credentials)
      })
      .then(({data}) => {
        $log.log(`Response: ${JSON.stringify(data)}`);

        this.pending = false;

        if (data._responseStatus === 1) {
          const userData = JSON.parse(data.userJson);

          if (this.userHasAccessRights(userData)) {
            this.setSessionToken(data.sessionToken);
            this.setUserData(userData);

            $cookies.putObject('currentUser', this.user);
            $cookies.put('sessionToken', this.sessionToken);

          } else {
            return $q.reject(Config.messages.errors.accessRightsError);
          }
        } else {
          return $q.reject(data.msg);
        }
      }, (response) => {
        $log.log(`Server error UserService.login(): ${response.status} ${response.message}`);
        toaster.error(response.status, response.message);
      })
    },

    logout() {
      var params = { userId: this.user.userId, sessionToken: this.sessionToken };

      $log.log(`Request params: ${JSON.stringify(params)}`);

      this.pending = true;

      return $http({
        method: 'POST',
        url: `${$rootScope.currentEnv.apiUrl}/users/logout`,
        data: $.param(params)
      })
      .then(({data}) => {
        $log.log(`Response: ${JSON.stringify(data)}`);

        if (data._responseStatus === 1) {
          this.user = this.sessionToken = $rootScope.currentUser = null;

          $cookies.remove('currentUser');
          $cookies.remove('sessionToken');

          $state.go('home');
        } else {
          return $q.reject(data.msg);
        }
      }, (response) => {
        $log.log(`Server error UserService.logout(): ${response.status} ${response.message}`);
        toaster.error(response.status, response.message);
      }).finally(() => {
        this.pending = false;
      });
    },

    userHasAccessRights(userData) {
      function checkAccessRights(adminId) {
        return adminId === userData.userId;
      }

      return $rootScope.currentEnv.adminIds.some(checkAccessRights) ||
             $rootScope.currentEnv.superadminIds.some(checkAccessRights);
    },

    setSessionToken(sessionToken) {
      this.sessionToken = sessionToken;
    },

    setUserData(userData) {
      this.user = $rootScope.currentUser = angular.copy(userData);
    }
  }
}

UserService.$inject = ['$http', '$log', '$q', '$rootScope', '$cookies', '$state', 'Config', 'toaster'];

export default UserService;
