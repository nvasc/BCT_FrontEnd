function daihocController ($scope, daihocService) {
  const vm = this;
  vm.title = daihocService.title();
}

/* @ngInject */
export default daihocController;