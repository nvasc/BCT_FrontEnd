function nhapkhaubaocaoController ($scope, nhapkhaubaocaoService) {
  const vm = this;
  vm.title = nhapkhaubaocaoService.title();
  console.log($scope);
}

/* @ngInject */
export default nhapkhaubaocaoController;