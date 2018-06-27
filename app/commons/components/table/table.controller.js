function tableController($scope, $element, $attrs, $timeout, oauthDataFactory, $sce) {
  var vm = this;
  vm.url = oauthDataFactory.urlMain() + $scope.url;
  vm.headerTemplete = $sce.trustAsHtml($scope.theadTemplate);
  function init() {
    //nếu ko có tableData thì khởi tạo
    if (angular.isUndefined($scope.tableData)) {
      $scope.tableData = [];
    }
    //nếu ko có columns thì khởi tạo
    if (angular.isUndefined($scope.columns)) {
      $scope.columns = [];
    }
  };

  vm.isNumber =  function checkNumber(val) {
    return angular.isNumber(val);
  }

  init();
}
/* @ngInject */
export default tableController;
