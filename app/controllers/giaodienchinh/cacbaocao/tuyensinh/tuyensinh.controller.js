function tuyensinhController ($scope, tuyensinhService) {
  const vm = this;
  vm.title = tuyensinhService.title();
}

/* @ngInject */
export default tuyensinhController;