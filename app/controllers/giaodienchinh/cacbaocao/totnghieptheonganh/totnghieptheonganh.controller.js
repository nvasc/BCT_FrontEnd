function totnghieptheonganhController ($scope, totnghieptheonganhService) {
  const vm = this;
  vm.title = totnghieptheonganhService.title();
}

/* @ngInject */
export default totnghieptheonganhController;