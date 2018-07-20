function kiemsoatchungController ($scope, kiemsoatchungService) {
  const vm = this;  
  kiemsoatchungService.init();
  
}

/* @ngInject */
export default kiemsoatchungController;