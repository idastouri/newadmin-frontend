function UserService($http, $log, $q, $rootScope, $cookieStore, Config) {
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

            $cookieStore.put('currentUser', userData);
            $cookieStore.put('sessionToken', data.sessionToken);

          } else {
            return $q.reject(Config.messages.errors.accessRightsError);
          }
        } else {
          return $q.reject(data.msg);
        }
      })
    },

    logout() {

      /* TO DO: logout code */

      $cookieStore.remove('currentUser');
      $cookieStore.remove('sessionToken');

      location.reload();
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

UserService.$inject = ['$http', '$log', '$q', '$rootScope', '$cookieStore', 'Config'];

export default UserService;
