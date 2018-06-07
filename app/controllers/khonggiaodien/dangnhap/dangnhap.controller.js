
function dangnhapController ($scope, dangnhapService, $state, httpProvider, dataProvider, 
  $resource, loginInfoFactory) {
  const vm = this;
  
  vm.DangNhapModel = {
    UserName: '',
    Password: '',
    RememberMe: false
  };
  vm.dangnhap = function () {
    dangnhapService.dangnhap(vm.DangNhapModel).then(function (data) {     
      $state.go('giaodienchinh.kiemsoatchung');
    });
  }
  loginInfoFactory.checkLogin();
}

/* @ngInject */
export default dangnhapController;