function giaoviennhanvienRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.doingu.giaoviennhanvien', {
      url: '/cacbaocao/doingu/giaoviennhanvien',
      component: 'giaoviennhanvien'
    })
}
/* @ngInject */
export default giaoviennhanvienRoutes;
