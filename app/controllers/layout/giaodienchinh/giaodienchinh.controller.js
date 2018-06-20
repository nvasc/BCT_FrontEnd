
function giaodienchinhController ($rootScope, $scope, $timeout, loginInfoFactory) {
  const vm = this;    
  
  $timeout(function () {   
    loginInfoFactory.checkLogin();  
  });
}

/* @ngInject */
export default giaodienchinhController;