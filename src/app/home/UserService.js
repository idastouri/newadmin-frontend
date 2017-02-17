function UserService($http, $log, $q, $rootScope, Config) {
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
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
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
          } else {
            return $q.reject(Config.messages.errors.accessRightsError);
          }
        } else {
          return $q.reject(data.msg);
        }
      })
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

UserService.$inject = ['$http', '$log', '$q', '$rootScope', 'Config'];

export default UserService;
