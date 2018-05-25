function giaoviennhanvienController ($scope, giaoviennhanvienService) {
  const vm = this;
  vm.title = giaoviennhanvienService.title();
}

/* @ngInject */
export default giaoviennhanvienController;