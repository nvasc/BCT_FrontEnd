function danhsachtruongController ($scope, danhsachtruongService) {
  const vm = this;
  vm.title = danhsachtruongService.title();
}

/* @ngInject */
export default danhsachtruongController;