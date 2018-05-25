function daihocRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.daihoc', {
      url: '/cacbaocao/daihoc',
      component: 'daihoc'
    })
}
/* @ngInject */
export default daihocRoutes;
