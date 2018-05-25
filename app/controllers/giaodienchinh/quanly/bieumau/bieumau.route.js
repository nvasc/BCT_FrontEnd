function bieumauRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.bieumau', {
      url: '/quanly/bieumau',
      component: 'bieumau'
    })
}
/* @ngInject */
export default bieumauRoutes;
