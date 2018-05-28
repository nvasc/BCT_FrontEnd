function giangviennhanvienRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.doingu.giangviennhanvien', {
      url: '/cacbaocao/doingu/giangviennhanvien',
      component: 'giangviennhanvien'
    })
}
/* @ngInject */
export default giangviennhanvienRoutes;
