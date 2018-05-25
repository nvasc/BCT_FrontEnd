function sinhviennuocngoaidanghocController ($scope, sinhviennuocngoaidanghocService) {
  const vm = this;
  vm.title = sinhviennuocngoaidanghocService.title();
}

/* @ngInject */
export default sinhviennuocngoaidanghocController;