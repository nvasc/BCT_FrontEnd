function baocaolanhdaoController ($scope, baocaolanhdaoService) {
  const vm = this;
  vm.title = baocaolanhdaoService.title();
}

/* @ngInject */
export default baocaolanhdaoController;