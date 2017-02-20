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

function HeaderController(Config) {
  this.$onInit = () => {
    this.brands = Config.brands;
    this.envs = Config.envs;
  }
}

HeaderController.$inject = ['Config']

export default layoutHeader;
