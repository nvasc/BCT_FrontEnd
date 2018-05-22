function giaodienRoutes($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
  $stateProvider
    .state('giaodien', {
      url: '/giaodien',
      component: 'giaodien'
    })
}
/* @ngInject */
export default giaodienRoutes;
