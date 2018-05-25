function phanquyenController ($scope, phanquyenService) {
  const vm = this;
  vm.title = phanquyenService.title();
}

/* @ngInject */
export default phanquyenController;