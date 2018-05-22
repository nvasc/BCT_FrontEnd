function giaodienRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodien', {
      url: '/giaodien',
      component: 'giaodien'
    })
}
/* @ngInject */
export default giaodienRoutes;
