function headerController ($scope, giaodienchinhService, oauthDataFactory, $state) {
  const vm = this;
  vm.UserName = giaodienchinhService.getUserName();
  vm.TenantName = giaodienchinhService.getTenantName();
  vm.LoginName = giaodienchinhService.getLoginName();  

  vm.logout = function () {
    oauthDataFactory.removeToken();
    oauthDataFactory.removeRememberMe();
    $state.go('dangnhap');
  }
}

/* @ngInject */
export default headerController;