function lanhdaoRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.doingu.lanhdao', {
      url: '/cacbaocao/doingu/lanhdao',
      component: 'lanhdao'
    })
}
/* @ngInject */
export default lanhdaoRoutes;
