function baocaolanhdaoController ($scope, baocaolanhdaoService) {
  const vm = this;
  baocaolanhdaoService.init();
}

/* @ngInject */
export default baocaolanhdaoController;