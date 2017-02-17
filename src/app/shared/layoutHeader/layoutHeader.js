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
  }

  setInterval(()=>console.log(this.showNav), 500)
}

HeaderController.$inject = ['Config']

export default layoutHeader;
