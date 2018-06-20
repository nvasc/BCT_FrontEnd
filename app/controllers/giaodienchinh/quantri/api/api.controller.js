function apiController ($scope, apiService) {
  const vm = this;
  apiService.init();
  
}

/* @ngInject */
export default apiController;