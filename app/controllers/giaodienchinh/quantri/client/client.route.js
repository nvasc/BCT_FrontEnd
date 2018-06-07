function clientRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quantri.client', {
      url: '/quantri/client',
      component: 'client'
    })
}
/* @ngInject */
export default clientRoutes;
