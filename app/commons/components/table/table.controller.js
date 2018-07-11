import _ from 'lodash';

function tableController($scope, $element, $attrs, $timeout, oauthDataFactory, $sce, $http) {
  var vm = this;
  vm.url = oauthDataFactory.urlMain() + $scope.url;
  vm.headerTemplete = $sce.trustAsHtml($scope.theadTemplate);
  vm.columns = $scope.columns;

  var ciFilterObjectChange = null;
  var ciParamesterChange = null;

  function init() {
    //nếu ko có tableData thì khởi tạo
    if (angular.isUndefined(vm.tableData)) {
      vm.tableData = [];
    }
    //nếu ko có columns thì khởi tạo
    if (angular.isUndefined(vm.columns)) {
      vm.columns = [];
    }
    
    var filter = {};
    if ($attrs.ciFilterObject) {
      filter = angular.copy($scope.ciFilterObject);
      if (ciFilterObjectChange) {
        ciFilterObjectChange();
      }
      ciFilterObjectChange = $scope.$watch('ciFilterObject', function (nval, oval) {
        if (!angular.equals(nval, oval)) {
          init();
        }
      });

    }

    filter.Skip = 0;
    filter.Take = 50;
    filter.OrderBys = [];
    filter.Filters = [];

    if (angular.isDefined($scope.url)) {
      var url = vm.url;

      if ($attrs.ciParamester) {
        url += $scope.ciParamester;
        if (ciParamesterChange) {
          ciParamesterChange();
        }
        ciParamesterChange = $scope.$watch('ciParamester', function (nval, oval) {
          if (!angular.equals(nval, oval)) {
            init();
          }
        });
      }      
      $http.post(url, filter).then(function (resp) {
        vm.tableData = resp.data.Data;
      });
    }
    
  };

  vm.isNumber =  function checkNumber(val) {
    return angular.isNumber(val);
  }

  init();
}
/* @ngInject */
export default tableController;
