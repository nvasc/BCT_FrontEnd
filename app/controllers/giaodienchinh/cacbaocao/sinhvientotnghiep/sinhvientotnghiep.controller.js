function sinhvientotnghiepController ($scope, sinhvientotnghiepService) {
  const vm = this;
  vm.title = sinhvientotnghiepService.title();
}

/* @ngInject */
export default sinhvientotnghiepController;