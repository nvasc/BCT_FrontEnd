function tinhthanhRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.tinhthanh', {
      url: '/quanly/tinhthanh',
      component: 'tinhthanh'
    })
}
/* @ngInject */
export default tinhthanhRoutes;
