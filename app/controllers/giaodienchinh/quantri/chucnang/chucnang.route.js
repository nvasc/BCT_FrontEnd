function chucnangRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quantri.chucnang', {
      url: '/quantri/chucnang',
      component: 'chucnang'
    })
}
/* @ngInject */
export default chucnangRoutes;
