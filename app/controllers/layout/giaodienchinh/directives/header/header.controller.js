function headerController ($scope, giaodienchinhService, oauthDataFactory, $state, oauthFactory) {
  const vm = this;
  vm.UserName = giaodienchinhService.getUserName();
  vm.TenantName = giaodienchinhService.getTenantName();
  vm.LoginName = giaodienchinhService.getLoginName();  

  vm.logout = function () {
    oauthFactory.logOut();
    
    $state.go('dangnhap');
  }
  
  vm.test = function () {
    oauthFactory.refreshToken().then(function (result) {
      console.log(result);
    });
  }
}

/* @ngInject */
export default headerController;