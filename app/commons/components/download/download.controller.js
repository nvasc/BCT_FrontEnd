
function downloadController($scope, $element, $attrs, $timeout,
  $http, downloadFactory) {  

  $scope.downloadFile = function () {
    downloadFactory.download($scope.ciGid);
  }
}
/* @ngInject */
export default downloadController;
