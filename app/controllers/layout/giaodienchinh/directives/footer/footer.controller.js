function footerController ($scope, giaodienchinhService) {
  const vm = this;
  vm.version = giaodienchinhService.getAppVersion();
}

/* @ngInject */
export default footerController;