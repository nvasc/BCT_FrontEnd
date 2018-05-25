function totnghieptheonganhRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.totnghieptheonganh', {
      url: '/cacbaocao/totnghieptheonganh',
      component: 'totnghieptheonganh'
    })
}
/* @ngInject */
export default totnghieptheonganhRoutes;
