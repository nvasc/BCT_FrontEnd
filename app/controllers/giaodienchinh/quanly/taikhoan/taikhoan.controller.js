function taikhoanController ($scope, taikhoanService) {
  const vm = this;
  vm.title = taikhoanService.title();
}

/* @ngInject */
export default taikhoanController;