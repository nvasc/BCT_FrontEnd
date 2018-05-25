function nhatkyvaloiController ($scope, nhatkyvaloiService) {
  const vm = this;
  vm.title = nhatkyvaloiService.title();
}

/* @ngInject */
export default nhatkyvaloiController;