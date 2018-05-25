function bieumauController ($scope, bieumauService) {
  const vm = this;
  vm.title = bieumauService.title();
}

/* @ngInject */
export default bieumauController;