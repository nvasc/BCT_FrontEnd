function kiemsoatchungController ($scope, kiemsoatchungService) {
  const vm = this;
  vm.title = kiemsoatchungService.title();
  console.log($scope);
}

/* @ngInject */
export default kiemsoatchungController;