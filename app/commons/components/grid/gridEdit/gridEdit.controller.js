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
    $timeout(function () {      
      if ($scope.ciHeight) {
        $('#' + $scope.ciId).css('height', $scope.ciHeight);
        vm.gridApi.core.handleWindowResize();
        //vm.gridApi.core.refresh();       
      }      
    }, 120)
  }
  init();

 
}

/* @ngInject */
export default gridEditController;
