function HomeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<homepage></homepage>'
    });
}

HomeConfig.$inject = ['$stateProvider'];

export default HomeConfig;
