const signIn = {
  restrict: 'E',
  template: require('./signIn.html'),
  controller: SignInController
}

function SignInController(UserService, $rootScope) {
  const defaultEnv = 'Dev';

  this.$onInit = () => {
    this.credentials = {};
    $rootScope.env = defaultEnv;
  };

  this.login = UserService.login;
}

SignInController.$inject = ['UserService', '$rootScope'];

export default signIn;
