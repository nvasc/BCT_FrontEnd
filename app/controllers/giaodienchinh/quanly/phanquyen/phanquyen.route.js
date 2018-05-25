function phanquyenRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.phanquyen', {
      url: '/quanly/phanquyen',
      component: 'phanquyen'
    })
}
/* @ngInject */
export default phanquyenRoutes;
