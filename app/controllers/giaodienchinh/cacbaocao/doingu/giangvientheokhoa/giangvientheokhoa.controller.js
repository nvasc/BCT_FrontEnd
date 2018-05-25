function giangvientheokhoaController ($scope, giangvientheokhoaService) {
  const vm = this;
  vm.title = giangvientheokhoaService.title();
}

/* @ngInject */
export default giangvientheokhoaController;