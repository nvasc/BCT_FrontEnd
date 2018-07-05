function tongiaoRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quantri.tongiao', {
      url: '/quantri/tongiao',
      component: 'tongiao'
    })
}
/* @ngInject */
export default tongiaoRoutes;
