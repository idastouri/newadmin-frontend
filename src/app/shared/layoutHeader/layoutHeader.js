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

function HeaderController(Config, UserService) {
  this.$onInit = () => {
    this.brands = Config.brands;
    this.envs = Config.envs;
  };

  this.logout = () => {
    UserService.logout()
    .catch((serverError) => {
      alert(`Server error logout(): ${serverError}`);
    });
  }
}


HeaderController.$inject = ['Config', 'UserService'];

export default layoutHeader;
