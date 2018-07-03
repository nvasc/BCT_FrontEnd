function chucnangRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.chucnang', {
      url: '/quanly/chucnang',
      component: 'chucnang'
    })
}
/* @ngInject */
export default chucnangRoutes;
