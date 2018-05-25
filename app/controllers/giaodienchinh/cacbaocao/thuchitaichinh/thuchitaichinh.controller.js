function thuchitaichinhController ($scope, thuchitaichinhService) {
  const vm = this;
  vm.title = thuchitaichinhService.title();
}

/* @ngInject */
export default thuchitaichinhController;