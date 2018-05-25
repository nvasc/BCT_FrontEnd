function baocaochungController ($scope, baocaochungService) {
  const vm = this;
  vm.title = baocaochungService.title();
}

/* @ngInject */
export default baocaochungController;