function UserService($http, ApiUrl, $log) {
  return {
    login(credentials) {
      $log.log(`Request credentials: ${JSON.stringify(credentials)}`);

      return $http({
        method: 'POST',
        url: `${ApiUrl}/users/login`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $.param(credentials) // credentials is an object that contains `username` and `password`
      })
      .finally((data) => {
        $log.log(`Response: ${JSON.stringify(data)}`);
      })
    }
  }
}

UserService.$inject = ['$http', 'ApiUrl', '$log'];

export default UserService;
