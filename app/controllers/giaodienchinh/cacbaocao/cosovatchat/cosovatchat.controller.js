function cosovatchatController ($scope, cosovatchatService) {
  const vm = this;
  vm.title = cosovatchatService.title();
}

/* @ngInject */
export default cosovatchatController;