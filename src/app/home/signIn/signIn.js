const signIn = {
  restrict: 'E',
  bindings: {
    envs: '<',
    env: '<',
    onEnvUpdate: '&'
  },
  template: require('./signIn.html'),
  controller: SignInController
}

function SignInController(UserService) {
  this.$onInit = () => {
    this.credentials = {};
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

SignInController.$inject = ['UserService'];

export default signIn;
