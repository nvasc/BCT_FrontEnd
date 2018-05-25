function nhanviencanboRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.doingu.nhanviencanbo', {
      url: '/cacbaocao/doingu/nhanviencanbo',
      component: 'nhanviencanbo'
    })
}
/* @ngInject */
export default nhanviencanboRoutes;
