function hoptacquocteRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.hoptacquocte', {
      url: '/cacbaocao/hoptacquocte',
      component: 'hoptacquocte'
    })
}
/* @ngInject */
export default hoptacquocteRoutes;
