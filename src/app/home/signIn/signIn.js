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

  this.login = UserService.login;
}

SignInController.$inject = ['UserService'];

export default signIn;
