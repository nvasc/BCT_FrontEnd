function dantocRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quantri.dantoc', {
      url: '/quantri/dantoc',
      component: 'dantoc'
    })
}
/* @ngInject */
export default dantocRoutes;
