const signIn = {
  restrict: 'E',
  bindings: {
    env: '<',
    onEnvUpdate: '&'
  },
  template: require('./signIn.html'),
  controller: SignInController
}

function SignInController(UserService, Config) {
  this.$onInit = () => {
    this.credentials = {};
    this.envs = Config.envs;
  };

  this.login = (credentials) => {
    UserService.login(credentials)
    .catch((serverError) => {
      this.signInForm.$setValidity('serverError', false);
      this.serverError = serverError;
    })
  }

  this.onInputChange = () => {
    if (this.signInForm.$error.serverError) {
      this.signInForm.$setValidity('serverError', true);
    }
  }

  this.updateEnv = () => {
    this.onEnvUpdate({
      $event: {
        env: this.env
      }
    })
  }
}

SignInController.$inject = ['UserService', 'Config'];

export default signIn;
