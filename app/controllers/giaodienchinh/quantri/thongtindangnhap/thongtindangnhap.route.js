function thongtindangnhapRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quantri.thongtindangnhap', {
      url: '/quantri/thongtindangnhap',
      component: 'thongtindangnhap'
    })
}
/* @ngInject */
export default thongtindangnhapRoutes;
