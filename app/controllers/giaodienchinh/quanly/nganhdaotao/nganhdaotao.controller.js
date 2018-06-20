function nganhdaotaoController ($scope, nganhdaotaoService) {
  const vm = this;
  vm.title = nganhdaotaoService.title();
}

/* @ngInject */
export default nganhdaotaoController;