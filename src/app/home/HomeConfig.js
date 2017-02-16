function HomeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      views: {
        'main@': {
          controller: 'HomeController as home',
          template: '<sign-in></sign-in>'
        }
      },
    })
}

HomeConfig.$inject = ['$stateProvider'];

export default HomeConfig;
