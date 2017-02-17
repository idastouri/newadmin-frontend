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

function HeaderController(Config, $rootScope) {
  this.$onInit = () => {
    this.brands = Config.brands;
  }

  this.brandChange = () => {
    $rootScope.$broadcast('brandChange');
  }
}

HeaderController.$inject = ['Config', '$rootScope']

export default layoutHeader;
