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

function HeaderController(Config, UserService, toaster) {
  this.$onInit = () => {
    this.brands = Config.brands;
    this.envs = Config.envs;
  };

  this.logout = () => {
    UserService.logout()
    .catch((serverError) => {
      console.log('toaster');
      toaster.error('Oops', serverError);
    });
  }
}


HeaderController.$inject = ['Config', 'UserService', 'toaster'];

export default layoutHeader;
