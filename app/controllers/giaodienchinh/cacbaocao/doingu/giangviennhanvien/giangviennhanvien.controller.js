function giangviennhanvienController ($scope, giangviennhanvienService) {
  const vm = this;
  vm.title = giangviennhanvienService.title();
}

/* @ngInject */
export default giangviennhanvienController;