function taikhoanRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.taikhoan', {
      url: '/quanly/taikhoan',
      component: 'taikhoan'
    })
}
/* @ngInject */
export default taikhoanRoutes;
