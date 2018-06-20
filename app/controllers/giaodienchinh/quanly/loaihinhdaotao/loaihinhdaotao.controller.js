function loaihinhdaotaoController ($scope, loaihinhdaotaoService) {
  const vm = this;
  vm.title = loaihinhdaotaoService.title();
}

/* @ngInject */
export default loaihinhdaotaoController;