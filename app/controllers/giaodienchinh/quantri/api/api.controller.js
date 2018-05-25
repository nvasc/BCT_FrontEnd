function apiController ($scope, apiService) {
  const vm = this;
  vm.title = apiService.title();
}

/* @ngInject */
export default apiController;