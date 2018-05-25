function apiRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quantri.api', {
      url: '/quantri/api',
      component: 'api'
    })
}
/* @ngInject */
export default apiRoutes;
