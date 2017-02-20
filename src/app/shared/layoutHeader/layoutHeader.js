const layoutHeader = {
  restrict: 'E',
  template: require('./layoutHeader.html'),
  bindings: {
    env: '<',
    brand: '<',
    showNav: '<'
  },
  controller: HeaderController
}

function HeaderController(Config, UserService, $rootScope) {
  this.$onInit = () => {
    this.brands = Config.brands;
    this.envs = Config.envs;
  }

  this.brandChange = () => {
    $rootScope.$broadcast('brandChange');
  }

  this.logout = UserService.logout;
}

HeaderController.$inject = ['Config', 'UserService', '$rootScope'];

export default layoutHeader;
