
function dangnhapController ($scope, dangnhapService, $state, httpProvider, dataProvider, 
  $resource) {
  const vm = this;
  
  vm.DangNhapModel = {
    UserName: '',
    Password: '',
    RememberMe: false
  };
  vm.dangnhap = function () {
    dangnhapService.dangnhap(vm.DangNhapModel).then(function (data) {
      // var taiKhoan = dataProvider.provider('TaiKhoan');
      
      // var data = taiKhoan.get({id: 123}, function () {
      //   console.log(data);
      // });

      // httpProvider.get('api/TaiKhoan?id=241188', true).then(function (rep) {
      //   console.log(rep);
      // });
      $state.go('giaodienchinh.kiemsoatchung');
    });
  }
}

/* @ngInject */
export default dangnhapController;