function tongiaoRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.tongiao', {
      url: '/quanly/tongiao',
      component: 'tongiao'
    })
}
/* @ngInject */
export default tongiaoRoutes;
