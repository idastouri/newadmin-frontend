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

function HeaderController(Config, UserService, $rootScope, toaster) {
  this.$onInit = () => {
    this.brands = Config.brands;
    this.envs = Config.envs;
  };

  this.brandChange = () => {
    $rootScope.$broadcast('brandChange');
  }

  this.brandChange = () => {
    $rootScope.$broadcast('brandChange');
  }

  this.logout = () => {
    UserService.logout()
    .catch((serverError) => {
      toaster.error('Oops', serverError);
    });
  }
}

HeaderController.$inject = ['Config', 'UserService', '$rootScope', 'toaster'];

export default layoutHeader;
