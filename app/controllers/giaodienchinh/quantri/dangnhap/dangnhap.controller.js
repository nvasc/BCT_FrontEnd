function dangnhapController ($scope, dangnhapService) {
  const vm = this;
  vm.title = dangnhapService.title();
}

/* @ngInject */
export default dangnhapController;