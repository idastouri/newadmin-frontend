function AppConfig($stateProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      resolve: {
        // user(UserService) {
        //   return UserService.getCurrentUser();
        // }
      }
    })
}

AppConfig.$inject = ['$stateProvider'];

export default AppConfig;
