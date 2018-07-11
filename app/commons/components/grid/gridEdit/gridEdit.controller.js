function gridEditController($scope, $element, $attrs, $timeout, uiGridConstants,
  $http, oauthDataFactory) {
  var vm = this;

  vm.gridApi = null;

  $scope.data = [];

  vm.gridOptions = {
    enableCellEditOnFocus: true,
    columnDefs : $scope.colDefs,        
    onRegisterApi: function(gridApi) {
      vm.gridApi = gridApi;
    },
    data: 'data',
    enableColumnMenus: false,    
  }
  //----------------------init----------------- 
  
  function init() {
    if ($scope.ciData) {
      vm.gridOptions.data = $scope.ciData;      
    }
    
    if ($scope.ciSetScope) {
      $scope.ciSetScope($scope);
    } 
  }
  init();
}

/* @ngInject */
export default gridEditController;
