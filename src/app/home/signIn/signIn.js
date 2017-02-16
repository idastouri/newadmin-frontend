const signIn = {
  restrict: 'E',
  template: require('./signIn.html'),
  controller: SignInController
}

function SignInController(UserService) {
  const defaultEnv = 'Dev';

  this.$onInit = () => {
    this.credentials = {};
    this.env = defaultEnv;
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
}

SignInController.$inject = ['UserService'];

export default signIn;
