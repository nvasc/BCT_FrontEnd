function daotaoboiduongController ($scope, daotaoboiduongService) {
  const vm = this;
  vm.title = daotaoboiduongService.title();
}

/* @ngInject */
export default daotaoboiduongController;