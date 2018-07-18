function dantocRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.dantoc', {
      url: '/quanly/dantoc',
      component: 'dantoc'
    })
}
/* @ngInject */
export default dantocRoutes;
