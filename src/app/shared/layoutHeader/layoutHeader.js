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
  }

  this.logout = UserService.logout;
}

HeaderController.$inject = ['Config', 'UserService'];

export default layoutHeader;
