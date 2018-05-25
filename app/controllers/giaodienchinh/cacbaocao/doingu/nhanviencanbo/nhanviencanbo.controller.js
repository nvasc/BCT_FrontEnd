function nhanviencanboController ($scope, nhanviencanboService) {
  const vm = this;
  vm.title = nhanviencanboService.title();
}

/* @ngInject */
export default nhanviencanboController;