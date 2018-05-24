function nhapkhaubaocaoController ($scope, nhapkhaubaocaoService) {
  const vm = this;
  vm.title = nhapkhaubaocaoService.title();
}

/* @ngInject */
export default nhapkhaubaocaoController;