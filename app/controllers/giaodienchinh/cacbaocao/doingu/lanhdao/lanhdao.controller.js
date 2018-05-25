function lanhdaoController ($scope, lanhdaoService) {
  const vm = this;
  vm.title = lanhdaoService.title();
}

/* @ngInject */
export default lanhdaoController;