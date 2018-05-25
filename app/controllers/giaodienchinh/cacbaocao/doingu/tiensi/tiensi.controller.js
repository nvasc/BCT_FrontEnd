function tiensiController ($scope, tiensiService) {
  const vm = this;
  vm.title = tiensiService.title();
}

/* @ngInject */
export default tiensiController;