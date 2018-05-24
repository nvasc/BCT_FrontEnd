function kiemsoatchungController ($scope, kiemsoatchungService) {
  const vm = this;
  vm.title = kiemsoatchungService.title();
  if ($scope.cfpLoadingBarLoading) {
    $scope.cfpLoadingBarLoading();
  }

  $scope.cfpLoadingBarLoading = $scope.$on('cfpLoadingBar:started', function (e, d) {
    console.log(e, d)
  });

  $scope.$on('cfpLoadingBar:started', function(event, data) {
    // turn on that value
    console.log(event, data)
  });
}

/* @ngInject */
export default kiemsoatchungController;