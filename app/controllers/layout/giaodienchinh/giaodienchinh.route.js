function giaodienchinhRoutes($stateProvider, $urlRouterProvider, $locationProvider, 
  $compileProvider) {
  $stateProvider
    .state('giaodienchinh', {
      component: 'giaodienchinh'
    })
}
/* @ngInject */
export default giaodienchinhRoutes;
