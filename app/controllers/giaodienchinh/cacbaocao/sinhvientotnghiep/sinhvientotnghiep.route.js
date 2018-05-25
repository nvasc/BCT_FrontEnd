function sinhvientotnghiepRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.sinhvientotnghiep', {
      url: '/cacbaocao/sinhvientotnghiep',
      component: 'sinhvientotnghiep'
    })
}
/* @ngInject */
export default sinhvientotnghiepRoutes;
