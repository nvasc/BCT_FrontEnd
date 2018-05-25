function sinhviennuocngoaidanghocRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.hoptacquocte.sinhviennuocngoaidanghoc', {
      url: '/cacbaocao/hoptacquocte/sinhviennuocngoaidanghoc',
      component: 'sinhviennuocngoaidanghoc'
    })
}
/* @ngInject */
export default sinhviennuocngoaidanghocRoutes;
