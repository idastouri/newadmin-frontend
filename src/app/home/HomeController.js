function HomeController($rootScope, UserService, Config) {
  this.$onInit = () => {
    this.Config = Config;
    this.UserService = UserService;
    this.env = $rootScope.currentEnv;
  };

  this.updateEnv = (event) => {
    $rootScope.currentEnv = event.env;
  }
}

HomeController.$inject = ['$rootScope', 'UserService', 'Config'];

export default HomeController;
