
function giaodienchinhController ($rootScope, $scope, $timeout, loginInfoFactory) {
  const vm = this;  
  loginInfoFactory.checkLogin();  
}

/* @ngInject */
export default giaodienchinhController;