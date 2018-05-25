function hoptacquocteController ($scope, hoptacquocteService) {
  const vm = this;
  vm.title = hoptacquocteService.title();
}

/* @ngInject */
export default hoptacquocteController;