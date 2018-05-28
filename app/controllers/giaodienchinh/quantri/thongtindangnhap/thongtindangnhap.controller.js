function thongtindangnhapController ($scope, thongtindangnhapService) {
  const vm = this;
  vm.title = thongtindangnhapService.title();
}

/* @ngInject */
export default thongtindangnhapController;