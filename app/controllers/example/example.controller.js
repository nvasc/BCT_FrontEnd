
function exampleController ($scope, exampleService) {
  const vm = this;
  vm.title = exampleService.title();
}

/* @ngInject */
export default exampleController;