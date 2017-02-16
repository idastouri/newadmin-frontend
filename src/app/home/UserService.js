function UserService($http, ApiUrl, $log, $q) {
  return {
    pending: false,

    login(credentials) {
      $log.log(`Request credentials: ${JSON.stringify(credentials)}`);

      this.pending = true;

      return $http({
        method: 'POST',
        url: `${ApiUrl}/users/login`,
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
          this.setSessionToken(data.sessionToken);
          this.setUserData(JSON.parse(data.userJson));
        } else {
          return $q.reject(data.msg);
        }
      })
    },

    setSessionToken() {

    },

    setUserData() {

    }
  }
}

UserService.$inject = ['$http', 'ApiUrl', '$log', '$q'];

export default UserService;
